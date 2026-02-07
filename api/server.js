// ============================================================
// STUDENT PORTAL - NODE.JS EXPRESS BACKEND
// ============================================================

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');
const moment = require('moment');

// Load environment variables
dotenv.config();

const app = express();

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================================
// DATABASE CONFIGURATION
// ============================================================

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'student_portal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Generate unique ticket ID
function generateTicketId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0');
    return `COP-TICKET-${timestamp}-${random}`;
}

// Calculate due date based on SLA
function calculateDueDate(slaString) {
    let days = parseInt(slaString);
    if (slaString.includes('hour')) {
        // For 4-hour SLA, add 1 day
        days = 1;
    } else if (slaString.includes('working')) {
        // Keep the days as is
    } else {
        days = parseInt(slaString) || 3;
    }
    return moment().add(days, 'days').format('YYYY-MM-DD');
}

// ============================================================
// API ROUTES
// ============================================================

// ============================================================
// 1. CREATE NEW TICKET (Student submits request)
// ============================================================
app.post('/api/tickets/create', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const {
            studentId,
            title,
            description,
            requestTypeId,
            priority,
            contactMethod
        } = req.body;

        // Validate required fields
        if (!studentId || !title || !description || !requestTypeId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // Get request type info to find department
        const [requestTypeRows] = await connection.execute(
            'SELECT departmentId, sla FROM request_types WHERE typeId = ?',
            [requestTypeId]
        );

        if (requestTypeRows.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid request type'
            });
        }

        const { departmentId, sla } = requestTypeRows[0];
        const ticketId = generateTicketId();
        const dueDate = calculateDueDate(sla);

        // Create ticket
        await connection.execute(
            `INSERT INTO tickets 
            (ticketId, studentId, title, description, requestTypeId, departmentId, 
             status, priority, contactMethod, dueDate, sla, assignedTo, submittedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [
                ticketId, studentId, title, description, requestTypeId, departmentId,
                'submitted', priority || 'medium', contactMethod || 'email', dueDate, sla,
                `${departmentId} Support Team`
            ]
        );

        // Add initial message from student
        const [studentRows] = await connection.execute(
            'SELECT firstName, lastName, email FROM students WHERE studentId = ?',
            [studentId]
        );

        if (studentRows.length > 0) {
            const student = studentRows[0];
            await connection.execute(
                `INSERT INTO messages (ticketId, senderType, senderName, senderRole, senderEmail, message)
                VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    ticketId,
                    'student',
                    `${student.firstName} ${student.lastName}`,
                    'Student',
                    student.email,
                    description
                ]
            );
        }

        res.status(201).json({
            success: true,
            message: 'Ticket created successfully',
            ticketId: ticketId,
            dueDate: dueDate,
            sla: sla
        });

    } catch (error) {
        console.error('Error creating ticket:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating ticket',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 2. GET ALL TICKETS FOR STUDENT
// ============================================================
app.get('/api/tickets/student/:studentId', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const { studentId } = req.params;
        const { status } = req.query;

        let query = `
            SELECT 
                t.ticketId, t.title, t.description, t.status, t.priority,
                rt.name as requestType, rt.icon,
                d.name as departmentName,
                t.assignedTo, t.dueDate, t.submittedAt,
                (SELECT COUNT(*) FROM messages WHERE ticketId = t.ticketId) as messageCount
            FROM tickets t
            JOIN request_types rt ON t.requestTypeId = rt.typeId
            JOIN departments d ON t.departmentId = d.departmentId
            WHERE t.studentId = ?
        `;

        let params = [studentId];

        if (status && status !== 'all') {
            query += ' AND t.status = ?';
            params.push(status);
        }

        query += ' ORDER BY t.submittedAt DESC';

        const [tickets] = await connection.execute(query, params);

        res.json({
            success: true,
            tickets: tickets
        });

    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching tickets',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 3. GET SINGLE TICKET WITH CONVERSATION
// ============================================================
app.get('/api/tickets/:ticketId', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const { ticketId } = req.params;

        // Get ticket details
        const [ticketRows] = await connection.execute(
            `SELECT 
                t.ticketId, t.title, t.description, t.status, t.priority,
                rt.name as requestType, rt.icon,
                d.name as departmentName, d.email as departmentEmail,
                t.assignedTo, t.dueDate, t.submittedAt, t.sla,
                s.firstName, s.lastName, s.email
            FROM tickets t
            JOIN request_types rt ON t.requestTypeId = rt.typeId
            JOIN departments d ON t.departmentId = d.departmentId
            JOIN students s ON t.studentId = s.studentId
            WHERE t.ticketId = ?`,
            [ticketId]
        );

        if (ticketRows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Ticket not found'
            });
        }

        const ticket = ticketRows[0];

        // Get messages/conversation
        const [messages] = await connection.execute(
            `SELECT 
                id, senderType, senderName, senderRole, senderEmail, message, createdAt
            FROM messages
            WHERE ticketId = ?
            ORDER BY createdAt ASC`,
            [ticketId]
        );

        // Get attachments for each message
        for (let message of messages) {
            const [attachments] = await connection.execute(
                'SELECT fileName, fileUrl, fileSize FROM attachments WHERE messageId = ?',
                [message.id]
            );
            message.attachments = attachments;
        }

        res.json({
            success: true,
            ticket: ticket,
            messages: messages
        });

    } catch (error) {
        console.error('Error fetching ticket:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching ticket',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 4. SEND MESSAGE/REPLY TO TICKET
// ============================================================
app.post('/api/tickets/:ticketId/messages', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const { ticketId } = req.params;
        const { senderType, senderName, senderEmail, senderRole, message } = req.body;

        if (!message || !senderName) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // Insert message
        const [result] = await connection.execute(
            `INSERT INTO messages (ticketId, senderType, senderName, senderRole, senderEmail, message, createdAt)
            VALUES (?, ?, ?, ?, ?, ?, NOW())`,
            [ticketId, senderType || 'student', senderName, senderRole || 'Student', senderEmail, message]
        );

        // Update ticket's lastUpdatedAt
        await connection.execute(
            'UPDATE tickets SET lastUpdatedAt = NOW() WHERE ticketId = ?',
            [ticketId]
        );

        res.status(201).json({
            success: true,
            message: 'Message added successfully',
            messageId: result.insertId
        });

    } catch (error) {
        console.error('Error adding message:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding message',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 5. GET REQUEST TYPES
// ============================================================
app.get('/api/request-types', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const [types] = await connection.execute(
            `SELECT typeId, name, description, departmentId, icon, sla
            FROM request_types
            ORDER BY name ASC`
        );

        res.json({
            success: true,
            requestTypes: types
        });

    } catch (error) {
        console.error('Error fetching request types:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching request types',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 6. GET DEPARTMENTS
// ============================================================
app.get('/api/departments', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const [departments] = await connection.execute(
            `SELECT departmentId, name, email, responseTimeHours, color, icon
            FROM departments
            ORDER BY name ASC`
        );

        res.json({
            success: true,
            departments: departments
        });

    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching departments',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 7. UPDATE TICKET STATUS (Admin only)
// ============================================================
app.put('/api/tickets/:ticketId/status', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const { ticketId } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Status is required'
            });
        }

        await connection.execute(
            'UPDATE tickets SET status = ?, lastUpdatedAt = NOW() WHERE ticketId = ?',
            [status, ticketId]
        );

        res.json({
            success: true,
            message: 'Ticket status updated successfully'
        });

    } catch (error) {
        console.error('Error updating ticket status:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating ticket status',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// 8. GET STUDENT PROFILE
// ============================================================
app.get('/api/students/:studentId', async (req, res) => {
    const connection = await pool.getConnection();
    
    try {
        const { studentId } = req.params;

        const [students] = await connection.execute(
            'SELECT * FROM students WHERE studentId = ?',
            [studentId]
        );

        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        res.json({
            success: true,
            student: students[0]
        });

    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching student',
            error: error.message
        });
    } finally {
        connection.release();
    }
});

// ============================================================
// HEALTH CHECK
// ============================================================
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Student Portal API is running',
        timestamp: new Date()
    });
});

// ============================================================
// ERROR HANDLING
// ============================================================
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// ============================================================
// START SERVER
// ============================================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Student Portal API running on http://localhost:${PORT}`);
    console.log(`📊 Database: ${process.env.DB_NAME || 'student_portal'}`);
});

module.exports = app;

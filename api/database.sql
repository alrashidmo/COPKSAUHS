-- ============================================================
-- STUDENT PORTAL DATABASE SCHEMA
-- Ticket Tracking & Request Management System
-- ============================================================

-- Create database
CREATE DATABASE IF NOT EXISTS student_portal;
USE student_portal;

-- ============================================================
-- STUDENTS TABLE
-- ============================================================
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentId VARCHAR(20) UNIQUE NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    program VARCHAR(100),
    cohort VARCHAR(50),
    year VARCHAR(20),
    gpa DECIMAL(3, 2),
    academicStanding VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_studentId (studentId),
    INDEX idx_email (email)
);

-- ============================================================
-- DEPARTMENTS TABLE
-- ============================================================
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departmentId VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    responseTimeHours INT,
    color VARCHAR(20),
    icon VARCHAR(10),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_departmentId (departmentId)
);

-- ============================================================
-- REQUEST TYPES TABLE
-- ============================================================
CREATE TABLE request_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    typeId VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    departmentId VARCHAR(50) NOT NULL,
    icon VARCHAR(10),
    sla VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (departmentId) REFERENCES departments(departmentId),
    INDEX idx_typeId (typeId)
);

-- ============================================================
-- TICKETS TABLE (Main Request/Ticket Storage)
-- ============================================================
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticketId VARCHAR(50) UNIQUE NOT NULL,
    studentId VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requestTypeId VARCHAR(50) NOT NULL,
    departmentId VARCHAR(50) NOT NULL,
    status ENUM('submitted', 'in-progress', 'approved', 'rejected', 'closed', 'waiting-student') DEFAULT 'submitted',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    contactMethod ENUM('email', 'phone', 'in-person') DEFAULT 'email',
    assignedTo VARCHAR(255),
    assignedToEmail VARCHAR(255),
    dueDate DATE,
    sla VARCHAR(50),
    submittedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    lastUpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (studentId) REFERENCES students(studentId),
    FOREIGN KEY (requestTypeId) REFERENCES request_types(typeId),
    FOREIGN KEY (departmentId) REFERENCES departments(departmentId),
    INDEX idx_ticketId (ticketId),
    INDEX idx_studentId (studentId),
    INDEX idx_status (status),
    INDEX idx_departmentId (departmentId),
    INDEX idx_submittedAt (submittedAt)
);

-- ============================================================
-- MESSAGES TABLE (Ticket Conversations)
-- ============================================================
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticketId VARCHAR(50) NOT NULL,
    senderType ENUM('student', 'admin') NOT NULL,
    senderName VARCHAR(255) NOT NULL,
    senderRole VARCHAR(100),
    senderEmail VARCHAR(255),
    message LONGTEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ticketId) REFERENCES tickets(ticketId),
    INDEX idx_ticketId (ticketId),
    INDEX idx_createdAt (createdAt)
);

-- ============================================================
-- ATTACHMENTS TABLE
-- ============================================================
CREATE TABLE attachments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    messageId INT NOT NULL,
    fileName VARCHAR(255) NOT NULL,
    fileUrl VARCHAR(500) NOT NULL,
    fileSize INT,
    fileType VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (messageId) REFERENCES messages(id),
    INDEX idx_messageId (messageId)
);

-- ============================================================
-- INSERT DEPARTMENTS
-- ============================================================
INSERT INTO departments (departmentId, name, email, responseTimeHours, color, icon) VALUES
('academic', 'Academic Affairs', 'academic@ksau-hs.edu.sa', 24, '#1B5E20', '📚'),
('clinical', 'Clinical Affairs', 'clinical@ksau-hs.edu.sa', 12, '#008080', '🏥'),
('it', 'IT Support', 'itsupport@ksau-hs.edu.sa', 4, '#1565C0', '💻'),
('student-services', 'Student Services', 'studentservices@ksau-hs.edu.sa', 24, '#6A1B9A', '👥'),
('research', 'Research Unit', 'research@ksau-hs.edu.sa', 48, '#D32F2F', '🔬');

-- ============================================================
-- INSERT REQUEST TYPES
-- ============================================================
INSERT INTO request_types (typeId, name, description, departmentId, icon, sla) VALUES
('letter', 'Letter Requests', 'Training, Enrollment, or Official Letters', 'academic', '📄', '3 working days'),
('clinical', 'Clinical/Rotation Issue', 'Rotation change, site issue, preceptor concern', 'clinical', '🏥', '1 working day'),
('academic-support', 'Academic Support', 'Tutoring, mentorship, remediation', 'academic', '📚', '2 working days'),
('it-support', 'IT Support', 'Portal access, technical issues', 'it', '💻', '4 hours'),
('event-participation', 'Event/Conference Request', 'Conferences, events, competitions', 'student-services', '🎉', '2 working days'),
('general-inquiry', 'General Inquiry', 'Other questions or requests', 'student-services', '❓', '3 working days');

-- ============================================================
-- INSERT SAMPLE STUDENT
-- ============================================================
INSERT INTO students (studentId, firstName, lastName, email, phone, program, cohort, year, gpa, academicStanding) VALUES
('441210049', 'Bishier', 'Alfadhl', 'alfadhl10049@ksau-hs.edu.sa', '+966501234567', 'PharmD', 'IPPE II', '2025-2026', 3.90, 'Good');

-- ============================================================
-- CREATE VIEWS FOR EASIER QUERYING
-- ============================================================

-- View: Tickets with all related information
CREATE VIEW v_tickets_full AS
SELECT 
    t.ticketId,
    t.studentId,
    s.firstName,
    s.lastName,
    s.email as studentEmail,
    t.title,
    t.description,
    t.status,
    t.priority,
    rt.name as requestType,
    rt.icon as requestTypeIcon,
    d.name as departmentName,
    d.email as departmentEmail,
    t.assignedTo,
    t.assignedToEmail,
    t.dueDate,
    t.sla,
    t.submittedAt,
    t.lastUpdatedAt,
    (SELECT COUNT(*) FROM messages WHERE ticketId = t.ticketId) as messageCount
FROM tickets t
JOIN students s ON t.studentId = s.studentId
JOIN request_types rt ON t.requestTypeId = rt.typeId
JOIN departments d ON t.departmentId = d.departmentId;

-- ============================================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================================
CREATE INDEX idx_tickets_studentId_status ON tickets(studentId, status);
CREATE INDEX idx_tickets_departmentId_status ON tickets(departmentId, status);
CREATE INDEX idx_messages_ticketId_createdAt ON messages(ticketId, createdAt);

-- ============================================================
-- DATABASE SETUP COMPLETE
-- ============================================================
-- This schema is ready for the Node.js/Express backend
-- All tables are optimized for the ticket tracking system
-- Indexes added for fast querying

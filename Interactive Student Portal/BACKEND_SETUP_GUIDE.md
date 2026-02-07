# Backend Setup Guide - Node.js + Express

This guide walks you through setting up the backend API for the Student Portal ticket tracking system.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Database Setup](#step-1-database-setup)
3. [Step 2: Backend Installation](#step-2-backend-installation)
4. [Step 3: Configuration](#step-3-configuration)
5. [Step 4: Start the Server](#step-4-start-the-server)
6. [Step 5: Test the API](#step-5-test-the-api)
7. [Step 6: Frontend Integration](#step-6-frontend-integration)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MySQL Server** - [Download](https://dev.mysql.com/downloads/mysql/)
- **npm** (comes with Node.js) or **pnpm**
- Basic command-line knowledge

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check MySQL version
mysql --version
```

---

## Step 1: Database Setup

### 1.1 Create a Database

```bash
# Login to MySQL
mysql -u root -p

# Inside MySQL prompt, create database
CREATE DATABASE student_portal;

# Create a user (optional but recommended)
CREATE USER 'portal_user'@'localhost' IDENTIFIED BY 'SecurePassword123!';
GRANT ALL PRIVILEGES ON student_portal.* TO 'portal_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 1.2 Import the Schema

```bash
# Navigate to your project directory
cd path/to/your/project

# Import the database schema
mysql -u root -p student_portal < api/database.sql

# Or using the new user:
mysql -u portal_user -p student_portal < api/database.sql
```

### 1.3 Verify the Tables

```bash
# Login to MySQL
mysql -u root -p student_portal

# Check tables
SHOW TABLES;

# Should see:
# - students
# - departments
# - request_types
# - tickets
# - messages
# - attachments

# Check sample data
SELECT COUNT(*) FROM departments;
SELECT COUNT(*) FROM request_types;
SELECT COUNT(*) FROM students;

EXIT;
```

---

## Step 2: Backend Installation

### 2.1 Install Dependencies

```bash
# Navigate to api directory
cd api

# Install npm packages
npm install

# You should see:
# ✓ express
# ✓ mysql2
# ✓ cors
# ✓ dotenv
# ✓ moment
```

### 2.2 Verify Installation

```bash
# Check if node_modules was created
dir node_modules

# Check package versions
npm list
```

---

## Step 3: Configuration

### 3.1 Create Environment File

```bash
# Navigate to api directory
cd api

# Copy the example file
cp .env.example .env

# Or on Windows:
copy .env.example .env
```

### 3.2 Edit Configuration

Open `api/.env` and update with your settings:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_portal

# For using the new database user (from Step 1.1):
# DB_USER=portal_user
# DB_PASSWORD=SecurePassword123!
```

### 3.3 Understanding Configuration Options

| Variable | Purpose | Example |
|----------|---------|---------|
| PORT | Server port | 5000, 3000, 8080 |
| NODE_ENV | Environment type | development, production |
| DB_HOST | Database server address | localhost, 192.168.1.1 |
| DB_USER | MySQL username | root, portal_user |
| DB_PASSWORD | MySQL password | your_secure_password |
| DB_NAME | Database name | student_portal |

---

## Step 4: Start the Server

### 4.1 Development Mode (with auto-reload)

```bash
# Navigate to api directory
cd api

# Start in development mode
npm run dev

# You should see:
# ✓ Server is running on port 5000
# ✓ Database connection successful
```

### 4.2 Production Mode

```bash
# Navigate to api directory
cd api

# Start in production mode
npm start

# You should see:
# ✓ Server is running on port 5000
# ✓ Database connection successful
```

### 4.3 Stop the Server

```bash
# Press Ctrl+C to stop the server
```

---

## Step 5: Test the API

### 5.1 Health Check (Easiest Test)

Open your browser and go to:

```
http://localhost:5000/api/health
```

You should see:
```json
{
  "success": true,
  "message": "API is running"
}
```

### 5.2 Test with cURL

```bash
# Get all departments
curl http://localhost:5000/api/departments

# Get all request types
curl http://localhost:5000/api/request-types

# Get a student (ID: 441210049 is in sample data)
curl http://localhost:5000/api/students/441210049

# Get student's tickets
curl http://localhost:5000/api/tickets/student/441210049
```

### 5.3 Create a Test Ticket with cURL

```bash
curl -X POST http://localhost:5000/api/tickets/create \
  -H "Content-Type: application/json" \
  -d '{
    "studentId": "441210049",
    "title": "Test Ticket",
    "description": "This is a test ticket",
    "requestTypeId": 1,
    "priority": "medium",
    "contactMethod": "email"
  }'
```

### 5.4 Test with Postman (Recommended)

1. Download [Postman](https://www.postman.com/downloads/)
2. Import the API collection (see Postman Collection below)
3. Run requests from the GUI

#### Postman Collection JSON

Save this as `postman_collection.json`:

```json
{
  "info": {
    "name": "Student Portal API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/health"
      }
    },
    {
      "name": "Get Departments",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/departments"
      }
    },
    {
      "name": "Get Request Types",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/request-types"
      }
    },
    {
      "name": "Get Student Profile",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/students/441210049"
      }
    },
    {
      "name": "Get Student Tickets",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/tickets/student/441210049"
      }
    },
    {
      "name": "Create Ticket",
      "request": {
        "method": "POST",
        "url": "{{base_url}}/tickets/create",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"studentId\": \"441210049\",\n  \"title\": \"Test Ticket\",\n  \"description\": \"This is a test\",\n  \"requestTypeId\": 1,\n  \"priority\": \"medium\",\n  \"contactMethod\": \"email\"\n}"
        }
      }
    },
    {
      "name": "Get Ticket Detail",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/tickets/TK20250116001"
      }
    },
    {
      "name": "Send Message",
      "request": {
        "method": "POST",
        "url": "{{base_url}}/tickets/TK20250116001/messages",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"senderType\": \"student\",\n  \"senderName\": \"Ahmed Al-Rashed\",\n  \"senderEmail\": \"441210049@stu.ksu.edu.sa\",\n  \"senderRole\": \"Student\",\n  \"message\": \"Thank you for your response\"\n}"
        }
      }
    },
    {
      "name": "Update Ticket Status",
      "request": {
        "method": "PUT",
        "url": "{{base_url}}/tickets/TK20250116001/status",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"status\": \"closed\"\n}"
        }
      }
    }
  ],
  "variable": [
    {
      "key": "base_url",
      "value": "http://localhost:5000/api"
    }
  ]
}
```

In Postman:
1. Click "Import"
2. Select the JSON file
3. Set `base_url` variable to `http://localhost:5000/api`
4. Run requests

---

## Step 6: Frontend Integration

### 6.1 Include API Integration Script

In your main HTML file (`index.html`), include the API integration script AFTER the main app script:

```html
<!-- Main Portal -->
<script src="js/app.js"></script>

<!-- Student Portal Module -->
<script src="js/student-portal.js"></script>

<!-- API Integration -->
<script src="api/frontend-integration.js"></script>
```

### 6.2 Update API Base URL (if needed)

If your backend is on a different server, edit `api/frontend-integration.js`:

```javascript
// For production (different server):
const API_BASE_URL = 'https://your-api-server.com/api';

// For development (same server):
const API_BASE_URL = 'http://localhost:5000/api';

// For same origin:
const API_BASE_URL = '/api';
```

### 6.3 Implement Form Submission

In `js/student-portal.js`, modify the form submission handler in `renderRequestForm()`:

See `api/frontend-integration.js` for the complete code example.

Replace:
```javascript
// OLD: Demo version
document.getElementById('requestForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Request submitted successfully!');
    StudentPortal.renderHome();
});
```

With:
```javascript
// NEW: API integration version
document.getElementById('requestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const title = form.querySelector('input[name="title"]').value;
    const description = form.querySelector('textarea[name="description"]').value;
    const priority = form.querySelector('select[name="priority"]').value;
    const contactMethod = form.querySelector('select[name="contact"]').value;
    
    try {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = '📤 Submitting...';

        const result = await StudentPortalAPI.createTicket({
            studentId: StudentPortalManager.currentStudent.studentId,
            title,
            description,
            requestTypeId: parseInt(typeId),
            priority,
            contactMethod
        });

        alert(`✅ Request submitted successfully!\n\nTicket ID: ${result.ticketId}\nDue Date: ${result.dueDate}`);
        StudentPortal.renderHome();
        
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    } finally {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.textContent = '📤 Submit Request';
    }
});
```

### 6.4 Test the Complete Flow

1. Start your backend: `npm run dev` in the `api/` directory
2. Open the portal in your browser
3. Log in with student ID: `441210049`
4. Try to submit a request
5. Check the browser console for errors (F12 → Console tab)
6. Verify the ticket was created in the database

---

## Troubleshooting

### Error: "Cannot find module 'express'"

**Solution**: Install dependencies
```bash
cd api
npm install
```

### Error: "ECONNREFUSED 127.0.0.1:3306"

**Solution**: MySQL server is not running
```bash
# macOS
brew services start mysql

# Windows - MySQL should start automatically
# Or start from Services

# Linux
sudo service mysql start
```

### Error: "Access denied for user 'root'@'localhost'"

**Solution**: Check your MySQL password in `.env` file
```env
DB_PASSWORD=your_actual_password
```

### Error: "Database 'student_portal' doesn't exist"

**Solution**: Create the database
```bash
mysql -u root -p
CREATE DATABASE student_portal;
mysql -u root -p student_portal < api/database.sql
EXIT;
```

### CORS Errors in Browser Console

**Solution**: Ensure `cors` is enabled in `server.js`. The code already includes:
```javascript
app.use(cors());
```

If still having issues, check:
1. Backend is running on correct port
2. API_BASE_URL in frontend-integration.js is correct
3. Check Network tab in browser dev tools

### Port Already in Use

**Solution**: Change port in `.env` or stop the process using it

```bash
# Windows - find process on port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Linux/macOS
lsof -i :5000
kill -9 <PID>
```

### Database Connection Pool Errors

**Solution**: Increase connection pool size in `server.js` or restart the server

---

## Database Schema Overview

### Tables

1. **students** - Student profiles
   - Fields: studentId, firstName, lastName, email, program, gpa
   
2. **departments** - Department/staff information
   - Fields: departmentId, name, responsibleOfficer, avgResponseDays
   
3. **request_types** - Types of requests
   - Fields: requestTypeId, name, description, slaHours
   
4. **tickets** - Main support tickets
   - Fields: ticketId, studentId, title, description, status, priority, dueDate, createdDate, departmentId, requestTypeId
   
5. **messages** - Conversation messages
   - Fields: messageId, ticketId, senderType, senderName, message, sentDate
   
6. **attachments** - File attachments
   - Fields: attachmentId, messageId, fileName, fileSize, filePath

### Sample Data

- **Test Student**: ID `441210049`
- **Departments**: 5 departments (Student Affairs, Pharmacy, IT, Admin, Academic)
- **Request Types**: 6 types (Letter, Clinical Issue, Academic, IT Support, Event, General)

---

## API Endpoints Reference

### Create Ticket
```
POST /api/tickets/create
Body: {studentId, title, description, requestTypeId, priority, contactMethod}
Response: {success, ticketId, dueDate}
```

### Get Student Tickets
```
GET /api/tickets/student/:studentId?status=open|closed|all
Response: {success, tickets: [...]}
```

### Get Ticket Detail
```
GET /api/tickets/:ticketId
Response: {success, ticket, messages: [...]}
```

### Send Message
```
POST /api/tickets/:ticketId/messages
Body: {senderType, senderName, senderEmail, senderRole, message}
Response: {success, messageId}
```

### Get Request Types
```
GET /api/request-types
Response: {success, requestTypes: [...]}
```

### Get Departments
```
GET /api/departments
Response: {success, departments: [...]}
```

### Update Ticket Status
```
PUT /api/tickets/:ticketId/status
Body: {status}
Response: {success, message}
```

### Get Student Profile
```
GET /api/students/:studentId
Response: {success, student}
```

### Health Check
```
GET /api/health
Response: {success, message: "API is running"}
```

---

## Next Steps

1. ✅ Set up database
2. ✅ Install and configure backend
3. ✅ Test API endpoints
4. ✅ Integrate with frontend
5. Test end-to-end flow
6. Deploy to production server
7. Set up monitoring/logging
8. Add authentication (optional)

---

## Support & Resources

- **Express Documentation**: https://expressjs.com/
- **MySQL Documentation**: https://dev.mysql.com/doc/
- **Node.js Documentation**: https://nodejs.org/docs/
- **REST API Best Practices**: https://restfulapi.net/

---

**Last Updated**: January 2025
**Version**: 1.0

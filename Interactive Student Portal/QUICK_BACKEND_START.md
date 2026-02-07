# Quick Start - Backend Deployment

## ⚡ 5-Minute Setup (Experienced Users)

### 1. Database Setup (1 min)
```bash
mysql -u root -p
CREATE DATABASE student_portal;
mysql -u root -p student_portal < api/database.sql
EXIT;
```

### 2. Backend Setup (2 min)
```bash
cd api
cp .env.example .env
# Edit .env with your MySQL credentials
npm install
```

### 3. Start Server (1 min)
```bash
npm run dev
# Opens on http://localhost:5000/api
```

### 4. Test (1 min)
```bash
# In browser or curl:
curl http://localhost:5000/api/health

# Should return: {"success": true, "message": "API is running"}
```

### 5. Integrate Frontend (Copy 2 lines)
In `index.html`, add after `js/student-portal.js`:
```html
<script src="api/frontend-integration.js"></script>
```

---

## 📁 File Structure

```
api/
├── server.js              ← Express server (main code)
├── database.sql           ← Database schema (import to MySQL)
├── package.json           ← Dependencies
├── .env.example          ← Configuration template
├── .env                  ← Your actual config (create from example)
├── node_modules/         ← Dependencies (created by npm install)
└── frontend-integration.js ← API functions for frontend
```

---

## 🔑 Key Configuration

**`.env` file (required)**:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=student_portal
```

---

## 🚀 Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start with auto-reload (development) |
| `npm start` | Start production server |
| `Ctrl+C` | Stop server |

---

## 🧪 Testing

### Option 1: Browser
```
http://localhost:5000/api/health
```

### Option 2: cURL
```bash
curl http://localhost:5000/api/health
curl http://localhost:5000/api/departments
curl http://localhost:5000/api/students/441210049
```

### Option 3: Postman
Import the collection from `BACKEND_SETUP_GUIDE.md`

---

## ✅ Checklist

- [ ] MySQL is running
- [ ] Database created and schema imported
- [ ] `npm install` completed
- [ ] `.env` file created with credentials
- [ ] `npm run dev` starts without errors
- [ ] Health check returns success
- [ ] `api/frontend-integration.js` included in HTML
- [ ] Form submission works end-to-end

---

## 🆘 Common Issues

| Error | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` |
| "ECONNREFUSED 3306" | Start MySQL service |
| "Access denied" | Check DB_PASSWORD in .env |
| "Table doesn't exist" | Import database.sql |
| "Port already in use" | Change PORT in .env or kill process |
| "CORS errors" | Backend running? frontend-integration.js included? |

---

## 📊 Sample Student Data

**Pre-loaded Student**: ID `441210049`
- Can create tickets
- Can send messages
- Can view status

---

## 🔄 Frontend Integration Steps

1. **Include the script**:
   ```html
   <script src="api/frontend-integration.js"></script>
   ```

2. **In form submission**, use:
   ```javascript
   const result = await StudentPortalAPI.createTicket({
       studentId: "441210049",
       title: "Request title",
       description: "Details",
       requestTypeId: 1,
       priority: "medium",
       contactMethod: "email"
   });
   ```

3. **Get tickets**:
   ```javascript
   const tickets = await StudentPortalAPI.getStudentTickets("441210049");
   ```

---

## 📞 API Base URL

For development (backend on localhost):
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

For production (backend on different server):
```javascript
const API_BASE_URL = 'https://your-api-server.com/api';
```

---

## 🎯 Typical Flow

1. User fills form → clicks Submit
2. Frontend calls `StudentPortalAPI.createTicket()`
3. API creates ticket in database
4. Database returns ticketId
5. User sees confirmation with ticket ID
6. Ticket appears in student's ticket list
7. Staff can reply via messages
8. Student receives notifications (future feature)

---

## 📝 Database Tables

| Table | Purpose |
|-------|---------|
| students | User profiles |
| departments | Staff/teams |
| request_types | Type of requests |
| tickets | Support tickets |
| messages | Conversations |
| attachments | File uploads |

---

## 🔐 Security Notes

- Database credentials in `.env` (never commit to git)
- CORS enabled for same-origin requests
- Add authentication before production
- Use HTTPS in production
- Validate all inputs server-side

---

## 📚 Full Documentation

See `BACKEND_SETUP_GUIDE.md` for detailed instructions.

---

**Ready to deploy?** Start with: `cd api && npm install && npm run dev`

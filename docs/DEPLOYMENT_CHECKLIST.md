# 🚀 Deployment Checklist

## Pre-Deployment Verification

### ✅ Environment Setup
- [ ] Node.js installed (v14+)
- [ ] npm installed
- [ ] MySQL server installed and running
- [ ] Git installed (recommended)

### ✅ Database
- [ ] Database `student_portal` created
- [ ] `database.sql` imported successfully
- [ ] All 6 tables verified
- [ ] Sample data loaded
- [ ] Can query the database: `SELECT COUNT(*) FROM tickets;`

### ✅ Backend
- [ ] `api/` folder exists with all files
- [ ] `package.json` present
- [ ] `database.sql` present
- [ ] `server.js` present
- [ ] `npm install` completed (node_modules folder exists)
- [ ] `.env` file created from `.env.example`
- [ ] `.env` has correct credentials

### ✅ Frontend
- [ ] `index.html` updated
- [ ] `js/student-portal.js` or `api/student-portal-integrated.js` included
- [ ] `api/frontend-integration.js` included in HTML
- [ ] CSS files linked correctly
- [ ] No console errors when opening page

### ✅ API Testing
- [ ] `npm run dev` starts server
- [ ] Health check works: `http://localhost:5000/api/health`
- [ ] Endpoints tested with cURL or Postman:
  - [ ] GET `/api/departments` returns data
  - [ ] GET `/api/request-types` returns data
  - [ ] GET `/api/students/441210049` returns student
  - [ ] POST `/api/tickets/create` creates ticket
  - [ ] GET `/api/tickets/student/441210049` returns tickets

### ✅ Frontend Testing
- [ ] Portal page loads without errors
- [ ] Student login works (ID: 441210049)
- [ ] Request form displays
- [ ] Form submission connects to API
- [ ] Ticket appears in list after creation
- [ ] Can open ticket and view details
- [ ] Can send message to ticket

---

## Deployment Steps

### Step 1: Copy Files to Server

```bash
# Copy entire project to server
scp -r /path/to/local/project user@server.com:/var/www/student-portal

# Or if already on server
cp -r project /var/www/student-portal
```

### Step 2: Set Up Database

```bash
# Connect to server
ssh user@server.com

# Create database
mysql -u root -p
CREATE DATABASE student_portal;
exit;

# Import schema
mysql -u root -p student_portal < /var/www/student-portal/api/database.sql

# Verify
mysql -u root -p -e "USE student_portal; SHOW TABLES;"
```

### Step 3: Configure Environment

```bash
# Navigate to project
cd /var/www/student-portal/api

# Copy and edit .env
cp .env.example .env
nano .env

# Update with your settings:
# - DB_HOST: Your MySQL server IP/hostname
# - DB_USER: Your MySQL username
# - DB_PASSWORD: Your MySQL password
# - PORT: 5000 (or your desired port)
# - NODE_ENV: production
```

### Step 4: Install Dependencies

```bash
cd /var/www/student-portal/api
npm install

# Verify installation
npm list
```

### Step 5: Start Backend Service

```bash
# Option A: Manual start
npm start

# Option B: Use process manager (recommended)
npm install -g pm2
pm2 start server.js --name "student-portal-api"
pm2 save
pm2 startup
```

### Step 6: Update Frontend API URL

Edit `api/frontend-integration.js`:

```javascript
// Change from:
const API_BASE_URL = 'http://localhost:5000/api';

// To:
const API_BASE_URL = 'https://your-server.com/api';
```

### Step 7: Configure Web Server (Nginx/Apache)

#### For Nginx:

```nginx
server {
    listen 80;
    server_name your-server.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-server.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Serve static files
    location / {
        root /var/www/student-portal;
        try_files $uri $uri/ /index.html;
        index index.html;
    }

    # Proxy API requests
    location /api {
        proxy_pass http://localhost:5000/api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

#### For Apache:

```apache
<VirtualHost *:80>
    ServerName your-server.com
    Redirect permanent / https://your-server.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName your-server.com

    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem

    DocumentRoot /var/www/student-portal

    <Directory /var/www/student-portal>
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
    </Directory>

    ProxyPreserveHost On
    ProxyPass /api http://localhost:5000/api
    ProxyPassReverse /api http://localhost:5000/api
</VirtualHost>
```

### Step 8: Set Up SSL Certificate

```bash
# Using Let's Encrypt (free)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-server.com
```

### Step 9: Set Up Monitoring

```bash
# Using PM2 monitoring
pm2 monit

# Or set up custom logging
mkdir -p /var/log/student-portal
pm2 start server.js --name "student-portal-api" \
  --error /var/log/student-portal/error.log \
  --out /var/log/student-portal/out.log
```

### Step 10: Verify Deployment

```bash
# Check if service is running
pm2 status

# Check logs
pm2 logs

# Test health endpoint
curl https://your-server.com/api/health

# Test frontend
curl https://your-server.com/
```

---

## Post-Deployment Tasks

### ✅ Testing

- [ ] Visit https://your-server.com in browser
- [ ] Load page without console errors
- [ ] Test creating a ticket
- [ ] Verify ticket appears in database
- [ ] Check API endpoints with curl

### ✅ Monitoring

- [ ] Set up error logging
- [ ] Monitor database connections
- [ ] Check server resource usage
- [ ] Set up uptime monitoring

### ✅ Backup

- [ ] Backup database daily
- [ ] Backup application code
- [ ] Keep backups off-site
- [ ] Test restore procedure

### ✅ Security

- [ ] Disable root login via SSH
- [ ] Set up firewall rules
- [ ] Install and configure fail2ban
- [ ] Update all packages: `apt update && apt upgrade`

### ✅ Performance

- [ ] Enable caching
- [ ] Minify CSS/JavaScript
- [ ] Use CDN for static files
- [ ] Monitor response times

---

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or change port in .env
PORT=5001
```

### Database Connection Issues

```bash
# Test MySQL connection
mysql -h localhost -u root -p -e "SELECT 1;"

# Check MySQL is running
sudo service mysql status
sudo service mysql restart
```

### API Not Responding

```bash
# Check if Node process is running
pm2 status
pm2 logs student-portal-api

# Restart if needed
pm2 restart student-portal-api
```

### CORS Errors

```javascript
// Check CORS is enabled in server.js
app.use(cors());

// Or specify allowed origins:
app.use(cors({
    origin: ['https://your-server.com', 'https://www.your-server.com']
}));
```

### High Memory Usage

```bash
# Check memory usage
free -h
top

# Restart Node service
pm2 restart student-portal-api
```

---

## Production Checklist

### Security
- [ ] HTTPS/SSL enabled
- [ ] .env file protected (not in git)
- [ ] Database credentials not exposed
- [ ] Input validation on all endpoints
- [ ] SQL injection protection enabled
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] DDoS protection enabled

### Performance
- [ ] Database indexes created
- [ ] Connection pooling configured
- [ ] Caching enabled
- [ ] Minified CSS/JS
- [ ] Images optimized
- [ ] CDN configured
- [ ] Response times < 200ms

### Reliability
- [ ] Error logging enabled
- [ ] Database backups automated
- [ ] Code backups automated
- [ ] Monitoring alerts set up
- [ ] Uptime monitoring enabled
- [ ] Graceful shutdown implemented
- [ ] Auto-restart on failure

### Documentation
- [ ] Deployment documented
- [ ] API documented
- [ ] Database schema documented
- [ ] Configuration documented
- [ ] Troubleshooting guide created
- [ ] Team trained on system

---

## Rollback Plan

If something goes wrong:

### Step 1: Stop Services
```bash
pm2 stop student-portal-api
pm2 stop nginx  # or apache
```

### Step 2: Restore from Backup
```bash
# Restore database
mysql -u root -p student_portal < /backups/database_backup.sql

# Restore code
rsync -av /backups/code/ /var/www/student-portal/
```

### Step 3: Restart Services
```bash
pm2 restart student-portal-api
systemctl restart nginx
```

### Step 4: Verify
```bash
curl https://your-server.com/api/health
```

---

## Maintenance Schedule

### Daily
- [ ] Check error logs
- [ ] Monitor disk space
- [ ] Monitor CPU/Memory
- [ ] Verify backups completed

### Weekly
- [ ] Review performance metrics
- [ ] Test backup restoration
- [ ] Security patches
- [ ] Database optimization

### Monthly
- [ ] Full security audit
- [ ] Performance analysis
- [ ] Capacity planning
- [ ] Team training

### Quarterly
- [ ] Major version updates
- [ ] Disaster recovery test
- [ ] Security penetration testing
- [ ] Database migration test

---

## Support Contacts

**On Deployment Issues:**
- Server Admin: [contact]
- Database Admin: [contact]
- Web Server Admin: [contact]

**On Code Issues:**
- Backend Lead: [contact]
- Frontend Lead: [contact]
- Project Manager: [contact]

---

## Useful Commands

```bash
# Check service status
pm2 status

# View logs
pm2 logs student-portal-api

# View specific log lines
tail -f /var/log/student-portal/error.log

# Restart service
pm2 restart student-portal-api

# Stop service
pm2 stop student-portal-api

# Start service
pm2 start server.js --name "student-portal-api"

# Check database
mysql -u root -p -e "USE student_portal; SHOW TABLES;"

# Check API health
curl https://your-server.com/api/health

# Check SSL certificate
curl -I https://your-server.com

# Monitor resources
top
df -h
free -h
```

---

## Completion Status

- [ ] All items in "Pre-Deployment Verification" checked
- [ ] All "Deployment Steps" completed
- [ ] "Post-Deployment Tasks" verified
- [ ] "Production Checklist" requirements met
- [ ] Documentation updated
- [ ] Team trained

---

**System is ready for production! 🎉**

*Last Updated: January 2025*
*Version: 1.0*

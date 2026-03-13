const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Parse the URL
    const pathname = url.parse(req.url).pathname;
    
    // Default to index.html if root
    let filePath = pathname === '/' ? './index.html' : '.' + pathname;
    
    // Get the file extension
    const ext = path.extname(filePath);
    
    // Set content type based on file extension
    let contentType = 'text/html';
    switch(ext) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.csv':
            contentType = 'text/csv';
            break;
        case '.html':
            contentType = 'text/html';
            break;
    }
    
    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1><p>Requested: ' + pathname + '</p>');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}/`);
    console.log(`📁 Serving files from: ${process.cwd()}`);
});

server.on('error', (err) => {
    console.error('❌ Server error:', err);
});

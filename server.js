const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ... ');
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Alo alo ...</p>');
    res.write('<p>Bùi Ngọc Tiến đây</p>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.js server is running on port 3000');
})


// server.js
const http = require('http');

const server = http.createServer((request, respons) => {
  respons.writeHead(200, { 'Content-Type': 'text/html' });
  respons.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

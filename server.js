// Throwaway server for the spec 114 P4 staging pass: GET /health reports its port and API_URL.
const http = require('http');
const port = Number(process.argv[2] || process.env.PORT);
http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ ok: true, port, apiUrl: process.env.API_URL || null }));
}).listen(port, '127.0.0.1', () => console.log('listening on ' + port));

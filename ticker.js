// Stands in for a long-lived dependency (like Azurite): listens on 47110 and prints a line every 5 s.
const net = require('net');
net.createServer(s => s.end()).listen(47110, '127.0.0.1', () => console.log('ticker listening on 47110'));
setInterval(() => console.log('tick ' + new Date().toISOString()), 5000);

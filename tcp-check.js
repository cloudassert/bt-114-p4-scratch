const net = require('net');
const s = net.connect(Number(process.argv[2]), '127.0.0.1');
s.on('connect', () => { s.destroy(); process.exit(0); });
s.on('error', () => process.exit(1));

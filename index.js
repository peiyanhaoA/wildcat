
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();  
app.use(express.static('dist'));
app.use(express.static('assets'));

const server = https.createServer( {
	key: fs.readFileSync('ssl-key/key.pem'),
	cert: fs.readFileSync('ssl-key/cert.pem')
}, app);  

server.listen(443, function(){
	console.log('Server running at https://localhost:443/');
});

const io = require('socket.io')(server);
io.on('connection', function (socket) {
	
});








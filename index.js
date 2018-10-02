const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	socket.on('chat message', function(msg){
		console.log('ok');
	    io.emit('chat message', msg);
	});
	socket.on('join', function(name){
		console.log(name);
	    io.emit('chat message', name + ' has joined');
	});
})

http.listen(3000, ()=>{
	console.log('listening on 3000');
})
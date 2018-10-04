const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/sound.ogg', (req, res)=>{
	res.sendFile(__dirname + '/sound.ogg');
});

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	socket.on('chat message', function(msg){
	    io.emit('chat message', msg);
	});
	socket.on('join', function(name){		
	    io.emit('join', name + ' has joined');
	});
})

http.listen(3005, ()=>{
	console.log('listening on 3005');
})
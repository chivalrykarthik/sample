var app = require('express')(),
	http = require('http').server(app),
	io = require('socket.io')(http);
	
app.get('/',function(req,resp){
	resp.sendFile('index.html');
});

http.listen(3000,function(){
	console.log('listening on *:3000');
});
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
io.on("connection",socket=>{
console.log(socket.id);

    // socket.on('test',data=>{

    // });
    io.emit('test',"nice to meet you")
    // console.log('send')
});

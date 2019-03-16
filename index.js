const path = require('path');
const fs = require('fs');
const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 5555

const app = express();
app.use(express.static('src'))

const server = http.createServer(app)

var io = require('socket.io')(server);

server.listen(PORT, () => {
  console.log('listening on PORT :', PORT);
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  })
});
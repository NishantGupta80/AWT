const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const users = {}; // store socket.id by username

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);


  socket.on('join', (username) => {
    users[username] = socket.id;
    socket.username = username;
    console.log(`${username} joined`);

   
    socket.broadcast.emit('user-connected', username);
  });

 
  socket.on('private-message', ({ to, message }) => {
    const targetSocketId = users[to];
    if (targetSocketId) {
      io.to(targetSocketId).emit('private-message', {
        from: socket.username,
        message,
      });
    }
  });

  
  socket.on('disconnect', () => {
    if (socket.username) {
      console.log(`${socket.username} disconnected`);
     
      delete users[socket.username];
      socket.broadcast.emit('user-disconnected', socket.username);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();

app.use(require("./router/router"));

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
//initialize socketio
const io = socketio(server);

// connect the instance of socketio
io.on("connection", (socket) => {
  console.log("Socket connected");

  // when the connection is terminated
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

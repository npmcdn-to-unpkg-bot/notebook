# WebSockets

**WebSockets** allow for a true two-way connection between the client and the server. WebSockets use their own protocol to send and receive data from a **tcp server**.

WebSockets are not limited to the browser, but can interface with native applications as well.

Before WebSockets, the server had two continually make GET requests to see if anything on the client machine had changed, a process known as **Polling**.

A **Long Poll** consists of making a request to the server and leaving it open for a longer period of time. The request would timeout when information hasn't changed. If changes were made, the server could immediately respond with the corresponding information. So essentially, Long Polling is just a more efficient way of Polling.

## Creating a WebSocket Server

The **WS Module** is a node module that helps in building WebSocket tcp server. Once the module is installed via `npm install ws`.

Setting up the WebSocket Server:

```javascript
// WebSocket Server is the Server key of ws module
var WebSocketServer = require("ws").Server;
// Create instance of WebSocketServer providing port
// as object literal
var wss = new WebSocketServer({ port: 3000 });
// Set up listener for new connections
// passes ws as callback parameter
wss.on("connection", function(ws) {
  // Send a message to client after connection made
  ws.send("You have connected via WebSockets!");
});

console.log("Socket Server is Running...");
```

Setting up the WebSocket Client:

```javascript
// Connect client to WebSocketServer
var ws = new WebSocket("ws://localhost:3000");
// Listener for when WebSocket opens
ws.onopen = function() {
  // Set client h1 to notify connection
  document.querySelector("h1").innerHTML = "Connected to WSS";
};
// Listen for when WebSocket closes
ws.onclose = function () {
  // Set client h1 to notify connection
  document.querySelector("h1").innerHTML = "Disconnected...";
};
// Listen for WebSocketServer to send message
ws.onmessage = function(payload) {
  var p = document.createElement('p');
  // Data of sent message
  p.innerText = payload.data;
  // Append sent message onto client page
  document.querySelector('div.messages').appendChild(p);
};
```

To connect with this instance in the browser navigate to `ws://localhost:3000` as opposed to `http://localhost:3000`.

---

## Broadcasting Messages with WebSockets

With WebSocket servers we can broadcast messages to every connected client socket.

First let's allow the client to send messages, via form input collection, to the WebSocket server:

```javascript
var ws = new WebSocket("ws://localhost:3000");
ws.onopen = function() {
  document.querySelector("h1").innerHTML = "Connected to WSS";
};
ws.onclose = function () {
  document.querySelector("h1").innerHTML = "Disconnected...";
};
ws.onmessage = function(payload) {
  var p = document.createElement('p');
  p.innerText = payload.data;
  document.querySelector('div.messages').appendChild(p);
};
// Add ability for client to send form input to WebSocketServer
document.forms[0].onsubmit = function () {
  var input = document.getElementById("message");
  // Send the input value of the form (before submission)
  // to WebSocketServer
  ws.send(input.value);
  // Reset input value
  input.value = '';
};
```

Now we can configure the WebSocketServer to broadcast the messages sent by the client:

```javascript
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });
wss.on("connection", function(ws) {
  // Listen for messages from client
  // passing them into callback as parameters
  ws.on("message", function(message) {
    if (message === "exit") {
      // Disconnect client / close socket
      ws.close();
    } else {
      // wss.clients is an array of all connected client sockets
      // Iterate through each client socket
      wss.clients.forEach(function(client) {
        // client.send() same as ws.send()
        // Send message to client socket
        client.send(message);
      });
    }
  });
  ws.send("You have connected via WebSockets!");
});

console.log("Socket Server is Running...");
```

Now the client can either exit the WebSocket connection by sending the message 'exit', otherwise any messages sent by the client will be broadcasted to every client socket connected to the WebSocket Server.

---

## Creating WebSockets with Socket.IO

When implementing the utilization of WebSockets in applications, it can become challenging to make up for the lack of support from older browsers.

The **Socket I.O** module allows for integrating WebSockets in your application while providing fallback support for older browsers. Socket I.O will fail back to Long Polling when WebSockets aren't supported.

We can recreate the examples from previous two section in Socket I.O, after first installing it via `npm install socket.io --save`. We will use Socket I.O with an Express application, `npm install express --save`.

Let's start by building the server:

```javascript
var express = require("express");
// Socket I.O requires us to set it up with http module
var http = require("http");
var app = express();
// Instead of sending http server a callback,
// send express app as parameter.
// This will create an http server based on the
// express application.
var server = http.createServer(app).listen(3000);
// Socket.IO is a function that when invoked
// should receive the server it should listen
// for incoming connections on
var io = require("socket.io")(server);

// Server static files via express static middle-ware
app.use(express.static("path/to/static/folder"));

// Will listen for an incoming socket.io connection
// and triggering callback function with socket passed in
io.on("connection", function(socket) {
  // Listen for 'chat' message from client
  socket.on("chat", function(message) {
    // Broadcast emitted message to every client socket
    socket.broadcast.emit("message", message);
  });

  // Emit a message event (rather than sending like with wss)
  socket.emit("message", "Connection Made to Socket.IO Server");
});

console.log("Starting Socket.IO App - http://localhost:3000");
```

Now moving on to the client-side. If we want to use socket.io on the client side we need to include the _socket.io-client.js_ file. You can either download these from the socket.io site or by `npm install socket.io-client --save`. So in the html file this script file **must be included**.

```javascript
// Create new instance of socket.io, sending it a link to server
var socket = io("http://localhost:3000");

// Listen for disconnect
socket.on("disconnect", function() {
  document.querySelector("h1").innerHTML = "Disconnected...";
});

// Listen for connect
socket.on("connect", function() {
  document.querySelector("h1").innerHTML = "Connected to Socket I.O";
});

// Listen for message, passing message text as param to callback
socket.on("message", function(message) {
  var p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(message);
});

// When user submits message send chat event to server
document.forms[0].onsubmit = function () {
  var input = document.getElementById("message");
  // Emit chat event back to the server, sending along
  // value from input field
  socket.emit("chat", input.value);
  // Reset input value
  input.value = '';
};
```

Now to run this server navigate to the terminal and run:

`node sio-server`

// crée le serveur express
const { log } = require("console");
const { Socket } = require("dgram");
const express = require("express");
// crée le serveur http
const http = require("http");
// crée le server socket.io
const { Server } = require('socket.io');

// création de l'instance express
const app = express();

// 
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET","POST"]
    }
});


io.on("connection", (socket) => {

    console.log("l'utilisateur vient de se connecter", socket.id)
    
});






// on lance le server
server.listen(3000, ()=>{
    console.log('serveur lancé');  
});
// importation du module express
const express = require("express");
// importation du module http
const http = require("http");
// importation du module socket.io
const { Server } = require('socket.io');

// création de l'instance express pour le server http
const app = express();

// création du server http pour le server socket.io
const server = http.createServer(app);

// création de l'instance socket.io pour le server socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
        allowedHeaders: ["*"]
    }
});


io.on("connection", (socket) => {
    // console.log("l'utilisateur vient de se connecter", socket.id)
    socket.on("bouton", (data) => {
        console.log(data, socket.id);
        // envoi du message à tous les clients
       socket.broadcast.emit("bouton_reponse", data);


    });
    
    // fonction pour recevoir un message du client
    socket.on("message", (data) => {
        console.log(data)
        socket.broadcast.emit("message_reponse", data)
    });
    
});






// on lance le server
server.listen(3000, ()=>{
    console.log('serveur lancé');  
});
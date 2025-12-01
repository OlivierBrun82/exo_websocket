import './App.css'
import { io } from "socket.io-client";
import { useEffect } from 'react';
import { useState } from 'react';

// connexion au serveur socket.io
const socket = io("http://localhost:3000");



function App() {

  // message envoyé
  const [message, setMessage] = useState('');
  // tout les messages reçus
  const [messages, setMessages] = useState([]);

// fonction pour envoyer un message au serveur
  function btnClick(){
    socket.emit("bouton", 'Hello World');
  }

  // fonction pour recevoir un message du serveur
  useEffect(() => {
    socket.on("bouton_reponse", (data) => {
      console.log(data);
    });
    socket.on("message_reponse", (data) => {
      setMessages((prev) => [...prev, "Serveur: " + data]);
    })

    // fonction pour déconnecter le socket
    return () => {
      socket.off("bouton_reponse");
      socket.off("message_reponse");
    };

  }, []);

// console.log(socket.id);

  function envoyer(){
    if (message.trim === '') {
      return;
    }
    // envoi du message au serveur pour moi
    setMessages((prev) => [...prev, "Moi: " + message]);

    socket.emit("message", message)
  };

  return (
    <>
      <div>
          <h1>Exo Websocket</h1>
          <div><button onClick={btnClick}>Test</button></div>
        <input type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={envoyer}>Envoyer</button>

        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

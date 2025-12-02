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
  // nom de l'user
  const [name, setName] = useState('');
  // counter qui va s'incrémenter des valeurs donné par les users
  const [counter, setCounter] = useState(0);
  // counter qu'on modifie
  const [inputCounter, setInputCounter] = useState(0);

  // fonction pour envoyer un message au serveur
  function btnClick(){
    socket.emit("bouton", 'Hello World');
  }

  // fonction pour envoyer le chiffre au serveur
  function incrementer() {
    socket.emit("counter", [name, inputCounter]);
    setInputCounter(0);    
  }
  // console.log(inputCounter);

  // fonction pour recevoir un message du serveur
  useEffect(() => {
    socket.on("bouton_reponse", (data) => {
      console.log(data);
    });
    socket.on("message_reponse", (data) => {
      setMessages((prev) => [...prev, data[0]+": " + data[1]]);
    })

    // fonction pour recevoir le nombre du serveur
    socket.on("counter_server", (data) => {
      setCounter(prev => prev + data[1]);
      setMessages((prev) => [...prev,data[0]+ " a incrémenter de " + data[1]])
    })

    // fonction pour déconnecter le socket
    return () => {
      socket.off("bouton_reponse");
      socket.off("message_reponse");
      socket.off("counter_server");
    };

  }, []);

  // console.log(socket.id);

  function envoyer(){
    if (message.trim() === '') {
      return;
    }
    // envoi du message au serveur pour moi
    setMessages((prev) => [...prev, "Moi: " + message]);

    socket.emit("message", [name, message]);
  };

  return (
    <>
      <div className="app-container">
        <h1>Exo Websocket</h1>
        
        <div className="counter-section">
          <div className="counter-display">
            <span className="counter-label">Compteur:</span>
            <span className="counter-value">{counter}</span>
          </div>
        </div>

        <div className="counter-controls">
          <div className="input-group">
            <input 
              type="number"
              className="input-field"
              value={inputCounter}
              onChange={(e) => setInputCounter(Number(e.target.value))}
              placeholder="Valeur à incrémenter"
            />
            <button onClick={incrementer} className="btn-primary">Incrémenter</button>
          </div>
          <button onClick={btnClick} className="btn-secondary">Test</button>
        </div>

        <div className="message-section">
          <div className="input-group">
            <input 
              type="text"
              className="input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Entrez votre message"
              onKeyPress={(e) => e.key === 'Enter' && envoyer()}
            />
            <button onClick={envoyer} className="btn-primary">Envoyer</button>
          </div>
        </div>

        <div className="messages-container">
          <h2>Messages</h2>
          <div className="messages-list">
            {messages.map((message, index) => (
              <div key={index} className="message-item">{message}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css'
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");



function App() {

console.log(socket.id);


  return (
    <>
      <div>
          <h1>Exo Websocket</h1>
      </div>

    </>
  )
}

export default App

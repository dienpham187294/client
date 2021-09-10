
import './App.css';
import Body from "./components/_body"
import io from "socket.io-client";
import { useEffect } from 'react';
import MDId from "./util/md_total"
// import { useEffect } from 'react';

// const socket = io("https://app-dienpham.herokuapp.com/")
// const socket = io("https://app-dienpham.herokuapp.com/", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// })
// const socket = io("https://newserverdienpham.herokuapp.com/");
const socket = io("http://localhost:4000/");
const ID = new MDId(socket);
function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id, "id1")
      ID.stateObj.SocketId = socket.id
    });
    socket.on("connect1", (data) => {
      console.log(data, "id2")
      ID.stateObj.SocketId = data
    });
    socket.on("dataGame", (data) => {
      ID.receiveSocket(data)
    });
  }, [])
  return (
    <div className="App">
      <Body ID={ID} />
    </div>
  );
}

export default App;

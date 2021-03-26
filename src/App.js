import React from 'react';
import io from "socket.io-client";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LoginComponents/Login';
import Admin from './components/LoginComponents/admin';
import Reading from './components/gameComponents/Reading';
// import Monopoly from './components/gameComponents/Monopoly';
// import Chess from './components/gameComponents/Chess';
import GameBoard from "./components/gameComponents/GameBoard"
import Vocabulary from './components/gameComponents/Vocabulary';
import { BrowserRouter as Router, Route } from "react-router-dom";
let socket = io("http://127.0.0.1:4444");
// https://app-dienpham.herokuapp.com/
// let socket = io("https://app-dienpham.herokuapp.com/");
const App = () => {
  return (
    <div className="container">
      <Router>

        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/admin">
          <Admin socket={socket} />
        </Route>
        <Route path="/login">
          <Login socket={socket} />
        </Route>
        <Route path="/reading">
          <Reading socket={socket} />
        </Route>
        <Route path="/vocabulary">
          <Vocabulary socket={socket} />
        </Route>
        <Route path="/game">
          <GameBoard socket={socket} />
        </Route>
        <Footer />

      </Router>
    </div>
  );
}

export default App;




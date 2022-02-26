import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import io from "socket.io-client";
import Header from './components/A1_Header';
// import Main from './components/A2_Main';
import About from './components/A2_About';
import Contact from './components/A2_Contact';
import Trangchu from './components/A2_Trangchu';
import A1_sidebar from "./components/A1_Sidebar"
import Video from './components/A2_Video';
import T0_linkApi from './util/toolAll/T0_linkApi';
import Thuchanhcoban from './components/A2a_Thuchanhcoban';
import Thuchanhcoban01 from './components/A2a_Thuchanhcoban01';
import Thuchanhcoban02 from './components/A2a_Thuchanhcoban02';
import Thuchanhnangcao from './components/A2b_Thuchanhnangcao';
import Thuchanhkienthuc from "./components/A2c_Thuchanhkienthuc"
import Thuchanhkienthuc01 from "./components/A2c_Thuchanhkienthuc01"
import Thuchanhkienthuc02 from "./components/A2c_Thuchanhkienthuc02"
const socket = io(T0_linkApi);
function App() {
  useEffect(() => {
    socket.on("connect_01", (data) => {
      console.log(data)
    });
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <A1_sidebar />
        <div className="A2_content">
          <Routes>
            <Route exact path='/' element={<Trangchu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/trangchu' element={<Trangchu />} />
            <Route path='/about' element={<About />} />
            <Route path='/video' element={<Video />} />
            <Route path='/thuchanhcoban' element={<Thuchanhcoban />} />
            <Route path='/thuchanhcoban01' element={<Thuchanhcoban01 />} />
            <Route path='/thuchanhcoban02' element={<Thuchanhcoban02 />} />
            <Route path='/thuchanhnangcao' element={<Thuchanhnangcao />} />
            <Route path='/thuchanhkienthuc' element={<Thuchanhkienthuc />} />
            <Route path='/thuchanhkienthuc01' element={<Thuchanhkienthuc01 />} />
            <Route path='/thuchanhkienthuc02' element={<Thuchanhkienthuc02 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;







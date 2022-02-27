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
import B1_Lop1 from './components/thuchanhTAPhothong/B1_Lop1';
import B1_Lop2 from './components/thuchanhTAPhothong/B1_Lop2';
import B1_lop31 from "./components/thuchanhTAPhothong/B1_Lop3_1"
import B1_lop32 from "./components/thuchanhTAPhothong/B1_Lop3_2"
import B1_lop41 from "./components/thuchanhTAPhothong/B1_Lop4_1"
import B1_lop42 from "./components/thuchanhTAPhothong/B1_Lop4_2"
import B1_lop51 from "./components/thuchanhTAPhothong/B1_Lop5_1"
import B1_lop52 from "./components/thuchanhTAPhothong/B1_Lop5_2"
import B1_lop61 from "./components/thuchanhTAPhothong/B1_Lop6_1"
import B1_lop62 from "./components/thuchanhTAPhothong/B1_Lop6_2"
import B1_lop71 from "./components/thuchanhTAPhothong/B1_Lop7_1"
import B1_lop72 from "./components/thuchanhTAPhothong/B1_Lop7_2"
import B1_Lop8 from "./components/thuchanhTAPhothong/B1_Lop8"
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


            
            <Route path='/thuchanh/app/tieng-anh-lop-1' element={<B1_Lop1 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-2' element={<B1_Lop2 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-3-tap-1' element={<B1_lop31 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-3-tap-2' element={<B1_lop32 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-4-tap-1' element={<B1_lop41 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-4-tap-2' element={<B1_lop42 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-5-tap-1' element={<B1_lop51 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-5-tap-2' element={<B1_lop52 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-6-tap-1' element={<B1_lop61 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-6-tap-2' element={<B1_lop62 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-7-tap-1' element={<B1_lop71 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-7-tap-2' element={<B1_lop72 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-8' element={<B1_Lop8 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;







import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from "socket.io-client";
import Header from './components/A1_Header';
// import Main from './components/A2_Main';
import About from './components/A2_About';
import Contact from './components/A2_Contact';
import Trangchu from './components/A2_Trangchu';
import A1sidebar from "./components/A1_Sidebar"
import Video from './components/A2_Video';
import A1Pricing from './components/A1_Pricing';
import T0_linkApi from './util/toolAll/T0_linkApi_HEROKU';
import Thuchanh_menu from './components/A2a_Thuchanh_menu';
import Thuchanh_menuA from './components/A2a_Thuchanh_menu_a';
import Thuchanh_01 from './components/A2a_Thuchanh_01';

import Thuchanh_02 from './components/A2a_Thuchanh_02';
import Thuchanhnangcao from './components/A2a_Thuchannangcao';

import B1Lop1 from './components/thuchanhTAPhothong/B1_Lop1';
import B1Lop2 from './components/thuchanhTAPhothong/B1_Lop2';
import B1lop31 from "./components/thuchanhTAPhothong/B1_Lop3_1"
import B1lop32 from "./components/thuchanhTAPhothong/B1_Lop3_2"
import B1lop41 from "./components/thuchanhTAPhothong/B1_Lop4_1"
import B1lop42 from "./components/thuchanhTAPhothong/B1_Lop4_2"
import B1lop51 from "./components/thuchanhTAPhothong/B1_Lop5_1"
import B1lop52 from "./components/thuchanhTAPhothong/B1_Lop5_2"
import B1lop61 from "./components/thuchanhTAPhothong/B1_Lop6_1"
import B1lop62 from "./components/thuchanhTAPhothong/B1_Lop6_2"
import B1lop71 from "./components/thuchanhTAPhothong/B1_Lop7_1"
import B1lop72 from "./components/thuchanhTAPhothong/B1_Lop7_2"
import B1Lop8 from "./components/thuchanhTAPhothong/B1_Lop8"
import CreateDocuments from './components/CreateDocument/B1_CreateDocument';
import LuyenGhepAm from './components/B_LuyenGhepAm';
import LuyenGhepAm01 from './components/B_LuyenGhepAm01';
import ThuDoNhay from './components/B_ThuDoNhay';
import ThuDoNhayTQ from './components/B_ThuDoNhayTQ';
import CMUSIC from "./components/C_Music"
import CMUSIC01 from "./components/C_Music01"
import DLUYENGHE from "./components/D_LuyenNghe"
import DLUYENGHE1 from "./components/D_LuyenNghe01"
import BaiHocPhienAm from "./components/A2_BaiHocPhienAm"
import VideoAll from "./components/A2_Video_All"
// import Words3000 from "./components/A2_3000Wds"


const socket = io(T0_linkApi);


function App() {
  const [SOCKET, setSOCKET] = useState(null)
  useEffect(() => {
    socket.on("connect_01", (data) => {
      setSOCKET(socket)
    });
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <A1sidebar />
        <VideoAll />
        <div className="A2_content">
          <Routes>
            <Route exact path='/' element={<A1Pricing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/trangchu' element={<A1Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/video' element={<Video />} />
            <Route path='/pricing' element={<A1Pricing />} />
            <Route path='/ipa-study' element={<BaiHocPhienAm />} />
            {/* <Route path='/3000-basic-words' element={<Words3000 />} /> */}



            <Route path='/thuchanhcoban' element={<Thuchanh_menu ApiReq={"menuThuchanhcoban"} Linkto={"thuchanhcoban01"} />} />
            <Route path='/thuchanhcoban01' element={<Thuchanh_01 SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} ThreshHold={0.6} />} />
            <Route path='/thuchanhcoban02' element={<Thuchanh_02 SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} />} />

            <Route path='/Pronunciation' element={<Thuchanh_menuA ApiReq={"menuPronunciation"} Linkto={"Pronunciation01"} />} />
            <Route path='/Pronunciation01' element={<Thuchanh_01 SOCKET={SOCKET} ApiReq={"loadDataPronunciation"} ThreshHold={0.4} />} />


            <Route path='/thuchanhnangcao' element={<Thuchanhnangcao SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} ThreshHold={0.6} />} />
            <Route path='/thuchanhkienthuc' element={<Thuchanh_menu ApiReq={"menuThuchanhkienthuc"} Linkto={"thuchanhkienthuc01"} />} />
            <Route path='/thuchanhkienthuc01' element={<Thuchanh_01 SOCKET={SOCKET} ApiReq={"loadDataThuchanhkienthuc"} ThreshHold={0.7} />} />
            <Route path='/thuchanhkienthuc02' element={<Thuchanh_02 SOCKET={SOCKET} ApiReq={"loadDataThuchanhkienthuc"} />} />



            <Route path='/thuchanh/app/tieng-anh-lop-1' element={<B1Lop1 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-2' element={<B1Lop2 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-3-tap-1' element={<B1lop31 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-3-tap-2' element={<B1lop32 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-4-tap-1' element={<B1lop41 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-4-tap-2' element={<B1lop42 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-5-tap-1' element={<B1lop51 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-5-tap-2' element={<B1lop52 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-6-tap-1' element={<B1lop61 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-6-tap-2' element={<B1lop62 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-7-tap-1' element={<B1lop71 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-7-tap-2' element={<B1lop72 />} />
            <Route path='/thuchanh/app/tieng-anh-lop-8' element={<B1Lop8 />} />
            <Route path='/CreateDocument' element={<CreateDocuments />} />
            <Route path='/luyen-ghep-am' element={<LuyenGhepAm />} />
            <Route path='/luyen-ghep-am-01' element={<LuyenGhepAm01 />} />

            <Route path='/luyen-nghe' element={<DLUYENGHE />} />
            <Route path='/luyen-nghe-01' element={<DLUYENGHE1 />} />
            <Route path='/thudonhay' element={<ThuDoNhay />} />
            <Route path='/thudonhaycn' element={<ThuDoNhayTQ />} />
            <Route path='/nhacipalyrics' element={<CMUSIC />} />
            <Route path='/nhacipalyrics-detail' element={<CMUSIC01 />} />




          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;







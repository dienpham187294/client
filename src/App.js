import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from "socket.io-client";
import Header from './components/A1_Header';
// import Main from './components/A2_Main';
import About from './components/A2_About';
import Contact from './components/A2_Contact';
import GhepAm from './components/A2_SoSanhPhienAm';
// import Trangchu from './components/A2_Trangchu';
import A1sidebar from "./components/A1_Sidebar"
import Video from './components/A2_Video';
import A1Pricing from './components/A1_Pricing';
import T0_linkApi from './util/toolAll/T0_linkApi_HEROKU';
import Thuchanhmenu from './components/A2a_Thuchanh_menu';
import ThuchanhmenuA from './components/A2a_Thuchanh_menu_a';
import ThuchanhmenuPart2b from './components/A2a_Thuchanh_menu_part2_b';
import ThuchanhmenuPart3a from './components/A2a_Thuchanh_menu_part3_a';
import ThuchanhmenuPart3b from './components/A2a_Thuchanh_menu_part3_b';
import ThuchanhmenuPart4 from './components/A2a_Thuchanh_menu_part4';
import ThuchanhmenuPart5 from './components/A2a_Thuchanh_menu_part5';
import Thuchanh01 from './components/A2a_Thuchanh_01';

import Thuchanh02 from './components/A2a_Thuchanh_02';
// import Thuchanhnangcao from './components/A2a_Thuchannangcao';

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
import LearnSts from "./components/C1_LEARNSTS"
// import ThuDoNhayTQ from './components/B_ThuDoNhayTQ';
// import CMUSIC from "./components/C_Music"
// import CMUSIC01 from "./components/C_Music01"
import DLUYENGHE from "./components/D_LuyenNghe"
import DLUYENGHE1 from "./components/D_LuyenNghe01"
import BaiHocPhienAm from "./components/A2_BaiHocPhienAm"
import VideoAll from "./components/A2_Video_All"
import Dangky from "./components/A2_Dangky"
import Posts1 from "./components/A1_Posts_1"
import Posts2 from "./components/A1_Posts_2"
import Posts3 from "./components/A1_Posts_3"
import Posts4 from "./components/A1_Posts_4"
import Posts5 from "./components/A1_Posts_5"
import Posts6 from "./components/A1_Posts_6"
import Posts7 from "./components/A1_Posts_7"
import Posts8 from "./components/A1_Posts_8"
import Posts9 from "./components/A1_Posts_9"
import Posts10 from "./components/A1_Posts_10"
import Posts11 from "./components/A1_Posts_11"
import Posts12 from "./components/A1_Posts_12"
import Posts13 from "./components/A1_Posts_13"
import Posts14 from "./components/A1_Posts_14"
import Posts15 from "./components/A1_Posts_15"
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
        <div id="top1" className="A2_content">
          <div id="topD">
            <br />
          </div>
          <Routes>
            <Route exact path='/' element={<A1Pricing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/home' element={<A1Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/video' element={<Video />} />
            <Route path='/pricing' element={<A1Pricing />} />
            <Route path='/dang-ky' element={<Dangky />} />
            <Route path='/ipa-study' element={<BaiHocPhienAm />} />
            <Route path='/sound-pairing' element={<GhepAm />} />
            <Route path='/learn-sts' element={<LearnSts />} />
            <Route path='/posts-1' element={<Posts1 />} />
            <Route path='/posts-2' element={<Posts2 />} />
            <Route path='/posts-3' element={<Posts3 />} />
            <Route path='/posts-4' element={<Posts4 />} />
            <Route path='/posts-5' element={<Posts5 />} />
            <Route path='/posts-6' element={<Posts6 />} />
            <Route path='/posts-7' element={<Posts7 />} />
            <Route path='/posts-8' element={<Posts8 />} />
            <Route path='/posts-9' element={<Posts9 />} />
            <Route path='/posts-10' element={<Posts10 />} />
            <Route path='/posts-11' element={<Posts11 />} />
            <Route path='/posts-12' element={<Posts12 />} />
            <Route path='/posts-13' element={<Posts13 />} />
            <Route path='/posts-14' element={<Posts14 />} />
            <Route path='/posts-15' element={<Posts15 />} />
            {/* <Route path='/3000-basic-words' element={<Words3000 />} /> */}



            <Route path='/part-2-c' element={<Thuchanhmenu ApiReq={"menuThuchanhcoban"} Linkto={"prac"} />} />

            <Route path='/prac' element={<Thuchanh01 SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} ThreshHold={0.6} />} />

            <Route path='/thuchanhcoban02' element={<Thuchanh02 SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} />} />

            <Route path='/part-2-a' element={<ThuchanhmenuA ApiReq={"menuPronunciation"} Linkto={"Pronunciation01"} />} />
            <Route path='/part-2-b' element={<ThuchanhmenuPart2b ApiReq={"menu1000Sen"} Linkto={"prac-2"} />} />
            <Route path='/part-3-a' element={<ThuchanhmenuPart3a ApiReq={"get3A"} Linkto={"prac-2"} />} />
            <Route path='/part-3-b' element={<ThuchanhmenuPart3b ApiReq={"get3B"} Linkto={"prac-2"} />} />
            <Route path='/part-4' element={<ThuchanhmenuPart4 ApiReq={"get4"} Linkto={"prac-2"} />} />
            <Route path='/part-5' element={<ThuchanhmenuPart5 ApiReq={"get5"} Linkto={"prac-2"} />} />
            <Route path='/Pronunciation01' element={<Thuchanh01 SOCKET={SOCKET} ApiReq={"loadDataPronunciation"} ThreshHold={0.2} />} />
            <Route path='/prac-2' element={<Thuchanh01 SOCKET={SOCKET} ApiReq={"loadDataPronunciation"} ThreshHold={0.6} />} />

            {/* <Route path='/thuchanhnangcao' element={<Thuchanhnangcao SOCKET={SOCKET} ApiReq={"loadDataThuchanhcoban"} ThreshHold={0.6} />} /> */}
            <Route path='/thuchanhkienthuc' element={<Thuchanhmenu ApiReq={"menuThuchanhkienthuc"} Linkto={"thuchanhkienthuc01"} />} />
            <Route path='/thuchanhkienthuc01' element={<Thuchanh01 SOCKET={SOCKET} ApiReq={"loadDataThuchanhkienthuc"} ThreshHold={0.7} />} />
            <Route path='/thuchanhkienthuc02' element={<Thuchanh02 SOCKET={SOCKET} ApiReq={"loadDataThuchanhkienthuc"} />} />



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

            <Route path='/listen' element={<DLUYENGHE />} />
            <Route path='/listen-01' element={<DLUYENGHE1 />} />
            <Route path='/test-AIipa' element={<ThuDoNhay />} />
            {/* <Route path='/thudonhaycn' element={<ThuDoNhayTQ />} />
            <Route path='/nhacipalyrics' element={<CMUSIC />} />
            <Route path='/nhacipalyrics-detail' element={<CMUSIC01 />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;







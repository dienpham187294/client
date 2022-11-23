import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/A1_Header";
import A2BaiHocPhienAm from "./components/A2_SoSanhPhienAm";
import Giaoan from "./components/Giaoan/main";
import GiaoanIMG from "./components/Giaoan/main_IMG";
// import Words3000 from "./components/A2_3000WdsPractice"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path='/words' element={<Words3000 />} /> */}
          <Route exact path="/ipa" element={<A2BaiHocPhienAm />} />
          <Route path="*" element={<Header />} />
          <Route path="/giaoan/:id" element={<Giaoan />} />
          <Route path="/giaoanimg/:id" element={<GiaoanIMG />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

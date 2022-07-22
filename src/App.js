import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/A1_Header';
import Words3000 from "./components/A2_3000WdsPractice"


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/words' element={<Words3000 />} />
          <Route
            path="*"
            element={
              <Header />
            }
          />
        </Routes>
      </div>
    </Router >
  );

}

export default App;







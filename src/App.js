import React from 'react';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Homes/Navbar';
import {Homes} from './Pages/Homes/Homescreen/index1';


function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homes />}> </Route>
          
          <Route path="*" element={<div>404 Page Not Found</div>}></Route>
        </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;

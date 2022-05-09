import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Bookpage from "./Bookpage";
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(){
  return(
    <Router>
      <div>
    <div className="grid">
      <div className="head"><span>N.J.V Tours</span> and Travels</div>
      <ul className="nav">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='booking'>Booking</Link></li>
      </ul>
    </div>
    <Routes>
        <Route path="" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/service" element={<Service/>}>Service</Route>
        <Route path="/booking" element={<Bookpage/>}>Booking</Route>
      </Routes>
      </div>
    </Router>
  )
}
export default App;


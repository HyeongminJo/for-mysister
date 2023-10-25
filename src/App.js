import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Home() {
  const colors=[
    {bgcolor:'#009884'},
    {bgcolor:'#005528'},
    {bgcolor:'#6EC8EB'},
    {bgcolor:'#531916'},
    {bgcolor:'#FED36F'},
    {bgcolor:'#B4D2C1'},
    {bgcolor:'#4C2859'},
    {bgcolor:'#3981C0'},
    {bgcolor:'#F19E46'}
  ];

  const [bgColor, setBgColor] = useState('');
  const [bgColor2, setBgColor2] = useState('');

  useEffect(() => {
    const idx = Math.floor(Math.random() * colors.length);
    setBgColor(colors[idx].bgcolor);

    let idx2;
    do {
      idx2 = Math.floor(Math.random() * colors.length);
    } while (idx2 === idx);
    
    setBgColor2(colors[idx2].bgcolor);
  }, []);

    return (
    <div className="mainDiv">
      <div className="main1" style={{backgroundColor: bgColor}}>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
      </div>
      <div className="main2" style={{backgroundColor: bgColor2}}></div>
    </div>
  );
}

function Inventory(){
  return (
    <div>쀼쀼</div>
  );
}

function About() {
  return (
    <div></div>
  );
}

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="navButton">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton">
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton">
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>
    </div>
  );
}

export default App;

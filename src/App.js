import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import logoImg from './logo.png';

function Home() {
  const images = [
    "/img/1.jpg", 
    "/img/2.jpg", 
    "/img/3.png", 
    "/img/4.png", 
    "/img/5.jpg", 
    "/img/6.png", 
    "/img/7.png", 
    "/img/8.png", 
    "/img/9.jpg", 
    "/img/10.png", 
    "/img/11.png", 
    "/img/12.png"
  ];

  const [bgImage, setBgImage] = useState('');
  const imageIndexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 이미지 인덱스를 다음 이미지로 이동
      imageIndexRef.current = (imageIndexRef.current + 1) % images.length;
      setBgImage(images[imageIndexRef.current]);
    }, 400);

    return () => {
      // 컴포넌트가 언마운트되면 clearInterval을 호출하여 인터벌을 정리합니다.
      clearInterval(intervalId);
    };
  }, []);

    return (
    <div className="mainDivHome">
      <nav className="homeNav">
        <div className="navButton home">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2">
          <NavLink to="/"><img class="logoImg" src={logoImg} alt="logo"/> </NavLink>
        </div>
        <div className="navButton inventory">
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more">
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="homeMain1" style={{backgroundImage: `url(${bgImage})`}}>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
      </div>
      <div className="homeMain2" style={{backgroundImage: `url(${bgImage})`}}></div>
    </div>
  );
}

function Inventory(){
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
      <nav className="nav">
        <div className="navButton home">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2">
          <NavLink to="/"><img class="logoImg" src={logoImg} alt="logo"/> </NavLink>
        </div>
        <div className="navButton inventory">
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more">
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="main1" style={{backgroundColor: bgColor}}>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
        222222222<br></br>
        222222222222<br></br>
        22222222222<br></br>
        22222222222222<br></br>
        2222222222222<br></br>
        2222222222<br></br>
        2222222222222<br></br>
      </div>
      <div className="main2" style={{backgroundColor: bgColor2}}></div>
    </div>
  );
}

function About() {
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
      <nav className="nav">
        <div className="navButton home">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2">
          <NavLink to="/"><img class="logoImg" src={logoImg} alt="logo"/> </NavLink>
        </div>
        <div className="navButton inventory">
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more">
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="main1" style={{backgroundColor: bgColor}}>
        333333<br></br>
        333333333<br></br>
        3333333333<br></br>
        3333333333<br></br>
        3333333333<br></br>
        3333333333<br></br>
        33333333<br></br>
      </div>
      <div className="main2" style={{backgroundColor: bgColor2}}></div>
    </div>
  );
}

function More() {
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
      <nav className="nav">
        <div className="navButton home">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2">
          <NavLink to="/"><img class="logoImg" src={logoImg} alt="logo"/> </NavLink>
        </div>
        <div className="navButton inventory">
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more">
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="main1" style={{backgroundColor: bgColor}}>
        4444<br></br>
        4<br></br>
        4<br></br>
        4<br></br>
        444<br></br>
        444444444444<br></br>
        444444444444444444444<br></br>
      </div>
      <div className="main2" style={{backgroundColor: bgColor2}}></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/About" element={<About />} />
        <Route path="/More" element={<More />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>
    </div>
  );
}

export default App;

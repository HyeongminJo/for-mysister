import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import logoImg from './logo.png';

function Home() {
  const images = [
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

  // 이미지 배열을 무작위로 섞기
  const shuffledImages = [...images];
  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
  }

  const [bgImage1, setBgImage1] = useState(shuffledImages[0]);
  const [bgImage2, setBgImage2] = useState(shuffledImages[1]); // 초기 이미지를 다르게 설정

  const imageIndexRef1 = useRef(0);
  const imageIndexRef2 = useRef(1);

  // 이미지를 일정 시간마다 변경
  useEffect(() => {
    const intervalId = setInterval(() => {
      imageIndexRef1.current = (imageIndexRef1.current + 1) % shuffledImages.length;
      imageIndexRef2.current = (imageIndexRef2.current + 1) % shuffledImages.length;
      setBgImage1(shuffledImages[imageIndexRef1.current]);
      setBgImage2(shuffledImages[imageIndexRef2.current]);
    }, 4000); // 4초마다 이미지 변경

    return () => {
      clearInterval(intervalId);
    };
  }, [shuffledImages]);

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
      <div className="homeMain1" style={{backgroundImage: `url(${bgImage1})`}}>
      </div>
      <div className="homeMain2" style={{backgroundImage: `url(${bgImage2})`}}></div>
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

import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>HWARA JO</title>
      </Helmet>
      <nav className="homeNav">
        <div className="navButton home">
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2">
          <NavLink to="/"><div class="logoImg"></div></NavLink>
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
  const [bgColor, setBgColor] = useState(''); // 세로 모드 배경 색상
  const [bgColor2, setBgColor2] = useState(''); // 가로 모드 배경 색상

  useEffect(() => {
    // 배경 색상 랜덤 선택
    const colors = ['#009884', '#005528', '#6EC8EB', '#531916', '#FED36F', '#B4D2C1', '#4C2859', '#3981C0', '#F19E46'];
    const idx = Math.floor(Math.random() * colors.length);
    setBgColor(colors[idx]);

    const colors2 = ['#FF5733', '#22A7F0', '#FC427B', '#F3CA40', '#C4E538', '#17C0EB', '#7158e2', '#009432'];
    const idx2 = Math.floor(Math.random() * colors2.length);
    setBgColor2(colors2[idx2]);
  }, []);

  // 화면 방향 확인
  useEffect(() => {
    function handleResize() {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      if (isLandscape) {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor2;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor2;
      } else {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor;
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로딩 시 설정

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bgColor, bgColor2]);

  return (
    <div className="bodyDiv">
      <Helmet>
        <title>INVENTORY - HWARA JO</title>
      </Helmet>
      <nav className="nav">
        <div className="navButton home" style={{backgroundColor: bgColor}}>
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2" style={{backgroundColor: bgColor}}>
          <NavLink to="/"><div class="logoImg"></div></NavLink>
        </div>
        <div className="navButton inventory" style={{backgroundColor: bgColor}}>
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about" style={{backgroundColor: bgColor2}}>
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more" style={{backgroundColor: bgColor2}}>
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="mainDiv">
        <div className="main1" style={{backgroundColor: bgColor}}></div>
        <div className="main2" style={{backgroundColor: bgColor2}}></div>
      </div>
      <div class="inventoryBody">
        <div>
          <div class="projectsList">
            <div class="items">
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                12222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
              <div class="item">
                2222
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [bgColor, setBgColor] = useState(''); // 세로 모드 배경 색상
  const [bgColor2, setBgColor2] = useState(''); // 가로 모드 배경 색상

  useEffect(() => {
    // 배경 색상 랜덤 선택
    const colors = ['#009884', '#005528', '#6EC8EB', '#531916', '#FED36F', '#B4D2C1', '#4C2859', '#3981C0', '#F19E46'];
    const idx = Math.floor(Math.random() * colors.length);
    setBgColor(colors[idx]);

    const colors2 = ['#FF5733', '#22A7F0', '#FC427B', '#F3CA40', '#C4E538', '#17C0EB', '#7158e2', '#009432'];
    const idx2 = Math.floor(Math.random() * colors2.length);
    setBgColor2(colors2[idx2]);
  }, []);

  // 화면 방향 확인
  useEffect(() => {
    function handleResize() {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      if (isLandscape) {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor2;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor2;
      } else {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor;
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로딩 시 설정

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bgColor, bgColor2]);

  return (
    <div className="bodyDiv">
      <Helmet>
        <title>ABOUT - HWARA JO</title>
      </Helmet>
      <nav className="nav">
        <div className="navButton home" style={{backgroundColor: bgColor}}>
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2" style={{backgroundColor: bgColor}}>
          <NavLink to="/"><div class="logoImg"></div></NavLink>
        </div>
        <div className="navButton inventory" style={{backgroundColor: bgColor}}>
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about" style={{backgroundColor: bgColor2}}>
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more" style={{backgroundColor: bgColor2}}>
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="mainDiv">
        <div className="main1" style={{backgroundColor: bgColor}}></div>
        <div className="main2" style={{backgroundColor: bgColor2}}></div>
      </div>
      <div className="aboutDiv">
        <div className="aboutDiv1">
          <div className="aboutDiv3">
            <div className="aboutNav">
              <Link to="introduction" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                INTORDUCTION
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="solo" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                SOLO EXHIBITION
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="group" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                GROUP EXHIBITION
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="award" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                AWARD
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="workshop" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                LECTURES AND WORKSHOP
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="featured" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                FEATURED IN
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="clients" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                COLLABORATORS AND CLIENTS
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="contact" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                CONTACT
              </Link>
            </div>
            <div className="aboutNav">
              <Link to="site" spy={true} offset={-31} smooth={true} duration={400} activeStyle={{ color: 'white' }}>
                ABOUT THIS SITE
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutDiv2">
          <div id="introduction">
            INTORDUCTION1 <br></br>
            INTORDUCTION2 <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
            INTORDUCTION <br></br>
          </div>
          <div id="solo">
            SOLO EXHIBITION1 <br></br>
            SOLO EXHIBITION2 <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
            SOLO EXHIBITION <br></br>
          </div>
          <div id="group">
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
            GROUP EXHIBITION <br></br>
          </div>
          <div id="award">
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
            AWARD <br></br>
          </div>
          <div id="workshop">
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
            WORKSHOP <br></br>
          </div>
          <div id="featured">
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
            FEATURED <br></br>
          </div>
          <div id="clients">
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
            CLIENTS <br></br>
          </div>
          <div id="contact">
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
            CONTACT <br></br>
          </div>
          <div id="site">
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
            SITE <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

function More() {
  const [bgColor, setBgColor] = useState(''); // 세로 모드 배경 색상
  const [bgColor2, setBgColor2] = useState(''); // 가로 모드 배경 색상

  useEffect(() => {
    // 배경 색상 랜덤 선택
    const colors = ['#009884', '#005528', '#6EC8EB', '#531916', '#FED36F', '#B4D2C1', '#4C2859', '#3981C0', '#F19E46'];
    const idx = Math.floor(Math.random() * colors.length);
    setBgColor(colors[idx]);

    const colors2 = ['#FF5733', '#22A7F0', '#FC427B', '#F3CA40', '#C4E538', '#17C0EB', '#7158e2', '#009432'];
    const idx2 = Math.floor(Math.random() * colors2.length);
    setBgColor2(colors2[idx2]);
  }, []);

  // 화면 방향 확인
  useEffect(() => {
    function handleResize() {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      if (isLandscape) {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor2;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor2;
      } else {
        document.querySelector('.navButton.about').style.backgroundColor = bgColor;
        document.querySelector('.navButton.more').style.backgroundColor = bgColor;
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 로딩 시 설정

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [bgColor, bgColor2]);

  return (
    <div className="bodyDiv">
      <Helmet>
        <title>* - HWARA JO</title>
      </Helmet>
      <nav className="nav">
        <div className="navButton home" style={{backgroundColor: bgColor}}>
          <NavLink to="/">HWARA JO</NavLink>
        </div>
        <div className="navButton home2" style={{backgroundColor: bgColor}}>
          <NavLink to="/"><div class="logoImg"></div></NavLink>
        </div>
        <div className="navButton inventory" style={{backgroundColor: bgColor}}>
          <NavLink to="/Inventory">INVENTORY</NavLink>
        </div>
        <div className="navButton about" style={{backgroundColor: bgColor2}}>
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="navButton more" style={{backgroundColor: bgColor2}}>
          <NavLink to="/More">*</NavLink>
        </div>
      </nav>
      <div className="mainDiv">
        <div className="main1" style={{backgroundColor: bgColor}}></div>
        <div className="main2" style={{backgroundColor: bgColor2}}></div>
      </div>
      <div>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      44444444444<br></br>
      4444444444444444444<br></br>
      4444444444444<br></br>
      </div>
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

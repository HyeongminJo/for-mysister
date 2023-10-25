import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div className="mainDiv">
      <div className="main1">
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
        여기 메인임<br></br>
      </div>
      <div className="main2"></div>
    </div>
  );
}

function Inventory(){
  return (
    <div>뿌ㅠ쀼</div>
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

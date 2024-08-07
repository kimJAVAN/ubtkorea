import React, {useEffect} from 'react'
import {Outlet, useLocation} from "react-router-dom";
import './assets/css/reset.css';
import {smoothScroll} from "./components/SmoothScroll/SmoothScroll.js";
import ChitHeader from "./components/Header/ChitHeader/ChitHeader.jsx";
import FuronteerHeader from "./components/Header/FuronteerHeader/FuronteerHeader.jsx";

function App() {
  // 스무스 스크롤
  useEffect(() => {
    smoothScroll();
  }, []);

    const location = useLocation();
    const isMainFuronteer = location.pathname.startsWith('/3');

  return (
    <>
        {isMainFuronteer ? <FuronteerHeader/> : <ChitHeader/>}
      <main id={'main'}>
        <Outlet/>
      </main>
    </>
  )
}

export default App

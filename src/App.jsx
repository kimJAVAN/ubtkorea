import React, {useEffect} from 'react'
import {Outlet} from "react-router-dom";
import './assets/css/reset.css';
import {smoothScroll} from "./components/SmoothScroll/SmoothScroll.js";
import ChitHeader from "./components/Header/ChitHeader/ChitHeader.jsx";

function App() {
  // 스무스 스크롤
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
        <ChitHeader/>
      <main id={'main'}>
        <Outlet/>
      </main>
    </>
  )
}

export default App

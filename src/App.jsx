import React, {useEffect} from 'react'
import {Outlet} from "react-router-dom";
import './assets/css/reset.css';
import {smoothScroll} from "./components/SmoothScroll/SmoothScroll.js";

function App() {
  // 스무스 스크롤
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
      <main id={'main'}>
        <Outlet/>
      </main>
    </>
  )
}

export default App

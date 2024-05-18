import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import MainRouter from "./MainRouter.jsx";
import Test from "../components/Test.jsx";




function AppRouter() {
  // 디바이스 width 감지 - PC 모바일 감지용
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  // 화면 반응형 대응 용
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // 모바일 vh 문제 용
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index  element={<App />}></Route>
          <Route path={'test/*'} element={<MainRouter windowWidth={windowWidth} />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

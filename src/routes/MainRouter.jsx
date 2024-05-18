import React from "react";
import {Route, Routes } from "react-router-dom";
import Test from "../components/Test.jsx";



function MainRouter(props) {
  const {
    windowWidth
  } = props

  return (
      <Routes>
        <Route index element={<Test windowWidth={windowWidth} />}></Route>
      </Routes>

  );
}

export default MainRouter;

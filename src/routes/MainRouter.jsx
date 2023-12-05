import React from "react";
import {Route, Routes } from "react-router-dom";
import Test from "../components/Test.jsx";



function MainRouter() {
  return (
      <Routes>
        <Route index element={<Test />}></Route>
      </Routes>

  );
}

export default MainRouter;

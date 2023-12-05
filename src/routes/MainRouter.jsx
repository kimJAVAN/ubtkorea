import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "../components/test.jsx";





function MainRouter() {
  return (

      <Routes>
        <Route path={'main'} element={<Test />}></Route>



      </Routes>

  );
}

export default AppRouter;

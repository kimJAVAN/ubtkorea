import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import MainRouter from "./MainRouter.jsx";
import Test from "../components/Test.jsx";




function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index  element={<App />}></Route>
          <Route path={'test/*'} element={<MainRouter />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

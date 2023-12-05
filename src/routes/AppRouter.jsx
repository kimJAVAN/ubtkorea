import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import MainRouter from "./MainRouter.jsx";




function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route path={'/main'} element={<MainRouter />}></Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRouter;

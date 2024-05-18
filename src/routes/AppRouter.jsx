import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import MainRouter from "./MainRouter.jsx";
import MainContainer from "../components/Main/MainContainer.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />}>
          <Route index element={<MainContainer />} />
          <Route path={'test/*'} element={<MainRouter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App.jsx";




function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />}>

        </Route>

      </Routes>
    </Router>
  );
}

export default AppRouter;

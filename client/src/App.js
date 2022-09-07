import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/auth" />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

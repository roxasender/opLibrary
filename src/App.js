import React, { Component } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/index/index";
import IndexNav from "./components/navbars/indexnav";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./pages/headComponents/Navbar";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

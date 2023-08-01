import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./pages/headComponents/Navbar";
import Games from "./pages/games/Games";
import Footer from "./pages/headComponents/Footer";
import GameDetailPage from "./pages/gameDetail/gameDetail";
import "../server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/:id" element={<GameDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

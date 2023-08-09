import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import Navbar from "./pages/headComponents/Navbar";
import Games from "./pages/games/Games";
import Footer from "./pages/headComponents/Footer";
import GameDetailPage from "./pages/gameDetail/gameDetail";
import Layout from "./pages/headComponents/Layout";
// import Host from "./pages/host/Host";
import "../server";
import HostLayout from "./pages/host/HostLayout";
import Dashboard from "./pages/host/components/Dashboard";
import Income from "./pages/host/components/Income";
import Reviews from "./pages/host/components/Reviews";
import HostGames from "./pages/host/components/HostGames";
import HostGameLayout from "./pages/host/components/HostGameLayout";
import HostGameDetailInfo from "./pages/host/components/HostGameDetailInfo";
import HostGameDetailPricing from "./pages/host/components/HostGameDetailPricing";
import HostGameDetailPhotos from "./pages/host/components/HostGameDetailPhotos";
import NotFound from "./pages/headComponents/NotFound";
import Login from "./pages/login/Login";
import AuthRequired from "./pages/headComponents/AuthRequired";
import SignUp from "./pages/signup/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    // <BrowserRouter>
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/games" element={<Games />} />
              <Route path="/about" element={<About />} />
              <Route path="/games/:id" element={<GameDetailPage />} />
              <Route element={<AuthRequired />}>
                <Route path="/host" element={<HostLayout />}>
                  <Route path="" element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="games" element={<HostGames />} />
                  <Route path="games/:id" element={<HostGameLayout />}>
                    <Route index element={<HostGameDetailInfo />} />
                    <Route path="pricing" element={<HostGameDetailPricing />} />
                    <Route path="photos" element={<HostGameDetailPhotos />} />
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
    // </BrowserRouter>
  );
}

export default App;

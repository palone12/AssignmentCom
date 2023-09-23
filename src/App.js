import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./Pages/History";
import Team from "./Pages/Team";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/history" element={<History />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

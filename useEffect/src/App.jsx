import React from "react";
import { Route, Routes } from "react-router";
import Posts from "./page/Post";
import Home from "./page/Home";
import About from "./page/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Posts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// windUi frame use for -tailwind

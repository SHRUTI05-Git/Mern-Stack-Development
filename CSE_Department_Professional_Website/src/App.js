import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Students from "./pages/Students";
import Facilities from "./pages/Facilities";
import Placements from "./pages/Placements";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/research" element={<Research />} />
          <Route path="/students" element={<Students />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
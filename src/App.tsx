import React from 'react';
import logo from './assets/logo.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Download from "./components/Download";
import Home from './components/Home';
import Music from './components/Music';
import License from './components/License';
import Contact from './components/Contact';
import useStore from "./store";
import Footer from "./components/Footer";
import Description from "./components/Description";
import NotFound from "./components/NotFound";


function App() {
  const dlUrls = useStore(s => s.dlUrls);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <img className="background-logo" src={logo} alt="Logo" />
        {dlUrls.mp3 && <Download />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/license" element={<License />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music/description" element={<Description />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

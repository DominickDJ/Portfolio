import "../App/App.css";
import "../App/Background.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="page">
        <ul className="background">
          {[...Array(20)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoaded(true);
    });

    return () => {
      window.removeEventListener("load", () => {
        setLoaded(false);
      });
    };
  }, []);

  return (
    <>
      {loaded ? (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;

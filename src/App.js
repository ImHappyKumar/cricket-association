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
    let timeoutId;
    let loadedEventFired = false;

    const onLoad = () => {
      loadedEventFired = true;
      setLoaded(true);
    };

    window.addEventListener("load", onLoad);

    timeoutId = setTimeout(() => {
      if (!loadedEventFired) {
        setLoaded(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeoutId);
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

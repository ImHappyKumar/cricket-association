import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useMatch,
} from "react-router-dom";
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
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function ScrollToTop() {
    const { pathname, key } = useLocation();
    const navigate = useNavigate();
    const match = useMatch(pathname);

    useEffect(() => {
      if (!match) {
        navigate(pathname);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }, [pathname, key, match, navigate]);

    return null;
  }

  return (
    <>
      {loaded ? (
        <Router>
          <ScrollToTop />
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

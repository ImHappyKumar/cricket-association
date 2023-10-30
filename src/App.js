import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import FullNews from "./components/FullNews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhoAreYou from "./components/WhoAreYou";

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

  return (
    <>
      {loaded ? (
        <Router>
          <Routes>
            <Route path="/signin" element={<WhoAreYou title={"Login"} linkMessage={"Don't have an account?"} linkButton={"Signup"} link={"/signup"} />} />
            <Route path="/signup" element={<WhoAreYou title={"Create Account"} linkMessage={"Already have an account?"} linkButton={"Signin"} link={"/signin"} />} />
            <Route
              element={
                <>
                  <Header />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<FullNews />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;

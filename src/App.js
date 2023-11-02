import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
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
import LoginSidebar from "./components/LoginSidebar";
import WhoAreYou from "./components/WhoAreYou";
import Login from "./components/Login";
import SendOtp from "./components/SendOtp"

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

  const signInWhoAreYouComponentProps = {
    clubLink: "/club-login",
    playerLink: "/player-login",
    linkMessage: "Don't have an account?",
    linkButton: "Sign up",
    link: "/signup",
  };

  const signUpWhoAreYouComponentProps = {
    clubLink: "/club-signup",
    playerLink: "/player-signup",
    linkMessage: "Already have an account?",
    linkButton: "Sign in",
    link: "/signin",
  };

  return (
    <>
      {loaded ? (
        <Router>
          <Routes>
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

            <Route
              element={
                <div className="container-fluid d-flex flex-wrap p-0">
                  <div className="col-12 col-md-6">
                    <LoginSidebar />
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <Outlet />
                  </div>
                </div>
              }
            >
              <Route
                path="/signin"
                element={
                  <Login
                    title={"Sign In"}
                    loginComponent={{
                      component: WhoAreYou,
                      props: signInWhoAreYouComponentProps,
                    }}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Login
                    title={"Sign Up"}
                    loginComponent={{
                      component: WhoAreYou,
                      props: signUpWhoAreYouComponentProps,
                    }}
                  />
                }
              />
              <Route
                path="/club-login"
                element={
                  <Login
                    title={"Club Login"}
                    loginComponent={{
                      component: SendOtp,
                      props: signUpWhoAreYouComponentProps,
                    }}
                  />
                }
              />
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

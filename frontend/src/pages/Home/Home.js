import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

// importing local components:
import LandingInfo from "./components/LandingInfo/LandingInfo";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const Home = ({
  visitorIdentity,
  setVisitorIdentity,
  isRegistered,
  setIsRegistered,
}) => {
  const navigate = useNavigate();

  // set isStudent state to default(0):
  useEffect(() => {
    let loggedIn = window.localStorage.getItem("loggedIn");
    let vId = window.localStorage.getItem("visitorIdentity");

    if (loggedIn === "true") {
      navigate(`dashboard/${vId}`);
    } else {
      setVisitorIdentity("");
    }
  }, [setVisitorIdentity, navigate]);

  return (
    <div className="hero min-h-screen">
      {visitorIdentity ? (
        isRegistered ? (
          <Login
            visitorIdentity={visitorIdentity}
            setVisitorIdentity={setVisitorIdentity}
            setIsRegistered={setIsRegistered}
          />
        ) : (
          <Register
            visitorIdentity={visitorIdentity}
            setVisitorIdentity={setVisitorIdentity}
            setIsRegistered={setIsRegistered}
          />
        )
      ) : (
        <LandingInfo setIsStudent={setVisitorIdentity} />
      )}
    </div>
  );
};

export default Home;

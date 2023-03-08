import React, { useState, useEffect } from "react";

import "./Home.css";

// importing local components:
import LandingInfo from "./components/LandingInfo/LandingInfo";
import Login from "./components/Login/Login";

const Home = () => {
  const [visitorIdentity, setVisitorIdentity] = useState("");

  // set isStudent state to default(0):
  useEffect(() => {
    setVisitorIdentity("");
  }, []);

  return (
    <div className="hero min-h-screen">
      {visitorIdentity ? (
        <Login
          visitorIdentity={visitorIdentity}
          setVisitorIdentity={setVisitorIdentity}
        />
      ) : (
        <LandingInfo setIsStudent={setVisitorIdentity} />
      )}
    </div>
  );
};

export default Home;

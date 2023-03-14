import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

// importing local components
import NavbarStart from "./components/NavbarStart";
import NavbarCenter from "./components/NavbarCenter";
import NavbarEnd from "./components/NavbarEnd";

const Navbar = ({ isDarkModeEnabled, setIsDarkModeEnabled, navbarTitle }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let loggedIn = window.localStorage.getItem("loggedIn");

    if (!loggedIn || loggedIn === "false") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className="navbar bg-base-100 fixed z-50">
      <NavbarStart />
      <NavbarCenter navbarTitle={navbarTitle} />
      <NavbarEnd
        isDarkModeEnabled={isDarkModeEnabled}
        setIsDarkModeEnabled={setIsDarkModeEnabled}
      />
    </section>
  );
};

export default Navbar;

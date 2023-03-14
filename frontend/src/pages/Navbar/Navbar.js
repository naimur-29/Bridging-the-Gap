import React from "react";

import "./navbar.css";

// importing local components
import NavbarStart from "./components/NavbarStart";
import NavbarCenter from "./components/NavbarCenter";
import NavbarEnd from "./components/NavbarEnd";

const Navbar = ({ isDarkModeEnabled, setIsDarkModeEnabled, navbarTitle }) => {
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

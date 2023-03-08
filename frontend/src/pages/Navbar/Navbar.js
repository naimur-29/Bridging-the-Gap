import React from "react";

// importing local components
import NavbarStart from "./components/NavbarStart";
import NavbarCenter from "./components/NavbarCenter";
import NavbarEnd from "./components/NavbarEnd";

const Navbar = ({ isDarkModeEnabled, setIsDarkModeEnabled }) => {
  return (
    <section className="navbar bg-base-100 relative">
      <NavbarStart />
      <NavbarCenter />
      <NavbarEnd
        isDarkModeEnabled={isDarkModeEnabled}
        setIsDarkModeEnabled={setIsDarkModeEnabled}
      />
    </section>
  );
};

export default Navbar;

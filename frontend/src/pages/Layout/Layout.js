import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";

// importing navbar
import Navbar from "../Navbar/Navbar";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

const Layout = ({ isLoggedIn, isDarkModeEnabled, setIsDarkModeEnabled }) => {
  return (
    <main
      className="layout relative min-h-screen"
      data-theme={isDarkModeEnabled ? "night" : "winter"}
    >
      {isLoggedIn ? (
        <Navbar
          isDarkModeEnabled={isDarkModeEnabled}
          setIsDarkModeEnabled={setIsDarkModeEnabled}
        />
      ) : (
        <HomeNavbar />
      )}
      <Outlet />
    </main>
  );
};

export default Layout;

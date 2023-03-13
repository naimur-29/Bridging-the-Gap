import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";

// importing navbar
import Navbar from "../Navbar/Navbar";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

const Layout = ({
  isLoggedIn,
  isDarkModeEnabled,
  setIsDarkModeEnabled,
  navbarTitle,
}) => {
  useEffect(() => {
    setIsDarkModeEnabled(window.localStorage?.getItem("dark-mode") === "true");
  }, [setIsDarkModeEnabled]);

  return (
    <main
      className="layout relative min-h-screen"
      data-theme={isDarkModeEnabled ? "night" : "winter"}
    >
      {isLoggedIn ? (
        <Navbar
          isDarkModeEnabled={isDarkModeEnabled}
          setIsDarkModeEnabled={setIsDarkModeEnabled}
          navbarTitle={navbarTitle}
        />
      ) : (
        <HomeNavbar />
      )}

      <Outlet />
    </main>
  );
};

export default Layout;

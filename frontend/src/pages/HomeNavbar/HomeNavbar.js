import React from "react";

const HomeNavbar = ({ setVisitorIdentity, setIsRegistered }) => {
  return (
    <div className="navbar bg-base-100 fixed z-[999]">
      <div className="navbar-start">
        <p className="normal-case text-xl font-bold ml-3">BGap</p>
      </div>

      <div className="navbar-end">
        <button
          className="btn"
          onClick={() => {
            setVisitorIdentity("university");
            setIsRegistered(false);
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default HomeNavbar;

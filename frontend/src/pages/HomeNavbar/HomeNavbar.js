import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 fixed z-[999]">
      <div className="navbar-start">
        <button
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate("/")}
        >
          BGap
        </button>
      </div>

      <div className="navbar-end">
        <button className="btn" onClick={() => navigate("register")}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default HomeNavbar;

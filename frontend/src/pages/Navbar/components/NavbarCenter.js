import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-center select-none">
      <button
        className="normal-case text-2xl"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default NavbarCenter;

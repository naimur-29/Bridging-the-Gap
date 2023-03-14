import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarStart = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button
              onClick={() => {
                let vId = window.localStorage.getItem("visitorIdentity");
                navigate(`/dashboard/${vId}`);
              }}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarStart;

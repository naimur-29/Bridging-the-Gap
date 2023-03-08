import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setVisitorIdentity, visitorIdentity }) => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-max bg-base-200 mt-10">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-center uppercase text-3xl font-bold mb-3">
              {visitorIdentity}
            </h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-2">
              <button
                className="btn btn-primary text-lg"
                onClick={() => navigate("/dashboard")}
              >
                Login
              </button>
            </div>

            <div className="form-control">
              <button
                className="btn btn-primary text-lg"
                onClick={() => setVisitorIdentity("")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

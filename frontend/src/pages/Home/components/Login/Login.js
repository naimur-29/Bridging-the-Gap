import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setVisitorIdentity, visitorIdentity, setIsRegistered }) => {
  const [userInput, setUserInput] = useState({});

  const navigate = useNavigate();

  return (
    <div className="hero min-h-max bg-base-200 mt-10">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-center uppercase text-3xl font-bold mb-3">
              {visitorIdentity}
            </h3>

            {visitorIdentity === "student/faculty" ? (
              <select
                className="select select-primary w-full"
                onChange={(e) => {
                  if (e.target.value === "Student") {
                    setVisitorIdentity("student");
                  } else {
                    setVisitorIdentity("faculty");
                  }
                }}
              >
                <option disabled selected>
                  Select Your Occupation
                </option>
                <option>Student</option>
                <option>Faculty</option>
              </select>
            ) : (
              <></>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email / Username</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
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
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
              <label className="label">
                <button
                  className="label-text-alt link link-hover"
                  onClick={() => setIsRegistered(false)}
                >
                  Don't have an account?
                </button>
              </label>
            </div>

            <div className="form-control mt-2">
              <button
                className="btn btn-primary text-lg"
                onClick={async () => {
                  if (userInput?.email && userInput?.password) {
                    window.localStorage.setItem("loggedIn", true);

                    window.localStorage.setItem(
                      "visitorIdentity",
                      visitorIdentity
                    );

                    navigate(
                      `/dashboard/${
                        visitorIdentity === "university"
                          ? "university"
                          : visitorIdentity === "faculty"
                          ? "faculty"
                          : "student"
                      }`
                    );
                  }
                }}
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

import React, { useState } from "react";

const Register = ({ setVisitorIdentity, visitorIdentity, setIsRegistered }) => {
  const [userInput, setUserInput] = useState({});

  return (
    <div
      className={
        visitorIdentity === "student/faculty"
          ? "hero min-h-screen mt-5"
          : "hero min-h-screen"
      }
    >
      <div className="hero min-h-max bg-base-200 mt-10">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="text-center uppercase text-3xl font-bold mb-3">
                {visitorIdentity}
              </h3>

              {visitorIdentity === "student/faculty" ? (
                <>
                  {/* context */}
                  <select className="select select-primary w-full">
                    <option disabled selected>
                      Select Your Occupation
                    </option>
                    <option>Student</option>
                    <option>Faculty</option>
                  </select>

                  {/* university */}
                  <select className="select select-primary w-full">
                    <option disabled selected>
                      Select Your University
                    </option>
                    <option>IUBAT</option>
                    <option>BUET</option>
                    <option>DU</option>
                    <option>CUET</option>
                  </select>
                </>
              ) : (
                <></>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="name"
                  className="input input-bordered"
                  onChange={(e) =>
                    setUserInput({ ...userInput, name: e.target.value })
                  }
                />
              </div>

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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  onChange={(e) =>
                    setUserInput({ ...userInput, password: e.target.value })
                  }
                />

                <label className="label">
                  <button
                    className="label-text-alt link link-hover"
                    onClick={() => setIsRegistered(true)}
                  >
                    Already have an account?
                  </button>
                </label>
              </div>

              <div className="form-control mt-2">
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => {
                    if (
                      userInput?.name &&
                      userInput?.email &&
                      userInput?.password
                    ) {
                      setIsRegistered(true);
                    }
                  }}
                >
                  Register
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
    </div>
  );
};

export default Register;

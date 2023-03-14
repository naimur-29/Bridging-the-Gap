import React from "react";

const LandingInfo = ({ setIsStudent }) => {
  return (
    <>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" transition-all duration-200 max-w-md lg:max-w-screen-2xl">
          <h1 className="mb-5 text-5xl font-bold lg:text-6xl">
            Welcome to Bridging the Gap
          </h1>
          <p className="mb-5 text-xl lg:mb-10 mt-[-10px]">
            Sign up today and start building stronger connections with your
            students!
          </p>

          <div className="btn-container flex-col mx-5 lg:flex-row">
            <button
              className="btn btn-primary w-full mb-3 text-xl lg:w-[30%] mr-3"
              onClick={() => setIsStudent("student")}
            >
              Student
            </button>

            <button
              className="btn btn-primary w-full text-xl lg:w-[30%]"
              onClick={() => {
                setIsStudent("university");
              }}
            >
              University
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingInfo;

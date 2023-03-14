import React from "react";
import { useNavigate } from "react-router-dom";

// import images:
import mainBg from "../../../assets/images/main-bg.jpg";

const Course = ({
  isStudent,
  isFaculty,
  c,
  courseCode,
  name,
  faculty,
  numberOfStudents,
  setNavbarTitle,
  setCurrentStats,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={mainBg} alt="background" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">
          {isFaculty || isStudent ? courseCode : name}
        </h2>
        <p>
          {isStudent ? name : ""} <br />
          {faculty ? faculty : name} <br />
          {!isStudent
            ? "Total Students: " +
              (numberOfStudents < 10 ? "0" : "") +
              numberOfStudents
            : ""}
        </p>

        {!isStudent ? (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary cursor-pointer"
              onClick={() => {
                setCurrentStats(c.stats);
                setNavbarTitle(courseCode + " > " + name);
                navigate("class/stats");
              }}
            >
              Statistics
            </button>
          </div>
        ) : (
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <button
              className="btn btn-primary cursor-pointer"
              onClick={() => navigate("feedback")}
            >
              Give Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;

import React from "react";
import { useNavigate } from "react-router-dom";

// import images:
import mainBg from "../../../assets/images/main-bg.jpg";

const CourseCard = ({
  course,
  code,
  name,
  setNavbarTitle,
  setCurrentCourse,
  setCurrentStats,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={mainBg} alt="background" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{code}</h2>
        <p>{name}</p>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary cursor-pointer"
            onClick={() => {
              navigate("course/stats");
              setCurrentStats(course.stats);
            }}
          >
            Statistics
          </button>
          <button
            className="btn btn-primary cursor-pointer"
            onClick={() => {
              setNavbarTitle(code);
              setCurrentCourse(course);
              navigate("course");
            }}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

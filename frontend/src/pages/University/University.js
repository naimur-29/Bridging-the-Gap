import React, { useEffect } from "react";

import "./university.css";

// import local components:
import CourseCard from "./components/CourseCard";

// import temporary data:
import { courses } from "../../temp/university";

const University = ({ setNavbarTitle, setCurrentCourse, setCurrentStats }) => {
  useEffect(() => {
    setNavbarTitle("Dashboard");
  }, [setNavbarTitle]);

  return (
    <section className="main-container">
      <div className="cards-container">
        {courses.map((c) => (
          <CourseCard
            course={c}
            name={c.name}
            code={c.code}
            setNavbarTitle={setNavbarTitle}
            setCurrentCourse={setCurrentCourse}
            setCurrentStats={setCurrentStats}
          />
        ))}
      </div>
    </section>
  );
};

export default University;

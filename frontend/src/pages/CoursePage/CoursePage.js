import React, { useEffect } from "react";

import ClassCard from "./components/ClassCard";

const CoursePage = ({ currentCourse, setNavbarTitle, setCurrentStats }) => {
  useEffect(() => {
    setNavbarTitle(currentCourse.code);
  }, [setNavbarTitle, currentCourse]);

  return (
    <section className="main-container">
      <div className="cards-container">
        {currentCourse?.classes.map((c) => (
          <ClassCard
            c={c}
            courseCode={currentCourse.code}
            name={c.name}
            faculty={c.faculty.name}
            numberOfStudents={c.students.length}
            setNavbarTitle={setNavbarTitle}
            setCurrentStats={setCurrentStats}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursePage;

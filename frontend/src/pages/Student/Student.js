import React, { useEffect } from "react";

// import local components:
import ClassCard from "../CoursePage/components/ClassCard";

// import temporary data:
import { studentData } from "../../temp/student";

const Student = ({ setNavbarTitle, setCurrentStats }) => {
  useEffect(() => {
    setNavbarTitle("Dashboard");
  }, [setNavbarTitle]);

  return (
    <section className="main-container">
      <div className="cards-container">
        {studentData.classes.map((c) => (
          <ClassCard
            isStudent={true}
            c={c}
            name={c.name}
            faculty={c.faculty}
            courseCode={c.courseCode}
            setNavbarTitle={setNavbarTitle}
            setCurrentStats={setCurrentStats}
          />
        ))}
      </div>
    </section>
  );
};

export default Student;

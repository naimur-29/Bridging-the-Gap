import React, { useEffect } from "react";

// import local components:
import ClassCard from "../CoursePage/components/ClassCard";

// import temporary data:
import { facultyData } from "../../temp/faculty";

const Student = ({ setNavbarTitle, setCurrentStats }) => {
  useEffect(() => {
    setNavbarTitle("Dashboard");
  }, [setNavbarTitle]);

  return (
    <section className="main-container">
      <div className="cards-container">
        {facultyData.classes.map((c) => (
          <ClassCard
            isStudent={true}
            c={c}
            name={c.name}
            faculty={c.faculty}
            courseCode={c.courseCode}
            numberOfStudents={c.students.length}
            setNavbarTitle={setNavbarTitle}
            setCurrentStats={setCurrentStats}
          />
        ))}
      </div>
    </section>
  );
};

export default Student;

const CourseModel = require("../models/courseModel");
const UniversityModel = require("../models/universityModel");

// create new course:
module.exports.createCourse = async (req, res) => {
  const { name, code, _uid } = req.body;
  let isUniversityValid = false;
  let courses = [];

  // find university:
  if (_uid && name && code) {
    await UniversityModel.findById(_uid)
      .then((data) => {
        if (data) {
          isUniversityValid = true;
          courses = data.courses;
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  if (isUniversityValid) {
    CourseModel.create({ name, code })
      .then((data) => {
        courses = [...courses, data];
        const pkg = { courses };

        if (data) {
          // update university:
          UniversityModel.findByIdAndUpdate(_uid, pkg)
            .then(() => {
              res.send(data);
            })
            .catch((err) => {
              if (err) {
                console.error(err);
                res.send({ message: "404 university not found!" });
              }
            });
        } else {
          res.send({ message: "404 course not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// update a course by id:
module.exports.updateCourseById = async (req, res) => {
  const { _id, classes = [] } = req.body;
  const pkg = { classes };

  if (_id) {
    CourseModel.findByIdAndUpdate(_id, pkg)
      .then((data) => {
        if (data) {
          res.send({ message: "Updated Successfully!" });
        } else {
          res.send({ message: "404 course not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 course not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// get a course by id:
module.exports.getCourseById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    CourseModel.findById(_id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.send({ message: "404 course not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          res.send({ message: "404 course not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// delete a course by id:
module.exports.deleteCourseById = async (req, res) => {
  const { _id, _uid } = req.body;

  let isUniversityValid = false;
  let courses = [];

  // find university:
  if (_uid && _id) {
    await UniversityModel.findById(_uid)
      .then((data) => {
        if (data) {
          isUniversityValid = true;
          courses = data.courses;
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  if (isUniversityValid) {
    CourseModel.findByIdAndDelete(_id)
      .then((data) => {
        courses = courses.filter((c) => c != _id);
        const pkg = { courses };

        if (data) {
          // update university:
          UniversityModel.findByIdAndUpdate(_uid, pkg)
            .then(() => {
              res.send({ message: "Delete Successfully!" });
            })
            .catch((err) => {
              if (err) {
                console.error(err);
                res.send({ message: "404 university not found!" });
              }
            });
        } else {
          res.send({ message: "404 course not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 course not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

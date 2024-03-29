const ClassModel = require("../models/classModel");
const UniversityModel = require("../models/universityModel");

// create new class:
module.exports.createClass = async (req, res) => {
  const { name, courseCode, faculty, _uid, _cid } = req.body;
  let isCourseValid = false;
  let courses = [];

  // find university:
  if (_cid && _uid && name && courseCode) {
    await UniversityModel.findById(_uid)
      .then((data) => {
        if (data) {
          isCourseValid = true;
          courses = data.courses;
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  if (isCourseValid) {
    ClassModel.create({ name, courseCode, faculty })
      .then((data) => {
        courses.forEach((c) => {
          console.log(c._id, `new ObjectId(${_cid})`);
          if (String(c._id) === `new ObjectId(${_cid})`) {
            c.classes = [...c.classes, data];
          }
        });
        console.log(courses);
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
                res.send({ message: "404 course not found!" });
              }
            });
        } else {
          res.send({ message: "404 course not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "Invalid Information!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// update a class by id:
module.exports.updateClassById = async (req, res) => {
  const { _id, feedbacks = [], students = [] } = req.body;
  const pkg = { feedbacks, students };

  if (_id) {
    ClassModel.findByIdAndUpdate(_id, pkg)
      .then((data) => {
        if (data) {
          res.send({ message: "Updated Successfully!" });
        } else {
          res.send({ message: "404 class not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 class not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// get a class by id:
module.exports.getClassById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    ClassModel.findById(_id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.send({ message: "404 class not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          res.send({ message: "404 class not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// // delete a course by id:
// module.exports.deleteCourseById = async (req, res) => {
//   const { _id, _uid } = req.body;

//   let isUniversityValid = false;
//   let courses = [];

//   // find university:
//   if (_uid && _id) {
//     await CourseModel.findById(_uid)
//       .then((data) => {
//         if (data) {
//           isUniversityValid = true;
//           courses = data.courses;
//         }
//       })
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//   }

//   if (isUniversityValid) {
//     ClassModel.findByIdAndDelete(_id)
//       .then((data) => {
//         courses = courses.filter((c) => c != _id);
//         const pkg = { courses };

//         if (data) {
//           // update university:
//           CourseModel.findByIdAndUpdate(_uid, pkg)
//             .then(() => {
//               res.send({ message: "Delete Successfully!" });
//             })
//             .catch((err) => {
//               if (err) {
//                 console.error(err);
//                 res.send({ message: "404 university not found!" });
//               }
//             });
//         } else {
//           res.send({ message: "404 course not found!" });
//         }
//       })
//       .catch((err) => {
//         if (err) {
//           console.error(err);
//           res.send({ message: "404 course not found!" });
//         }
//       });
//   } else {
//     res.send({ message: "Invalid Information!" });
//   }
// };

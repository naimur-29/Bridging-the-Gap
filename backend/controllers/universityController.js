const UniversityModel = require("../models/universityModel");

// get all universities:
module.exports.getAllUniversities = async (req, res) => {
  UniversityModel.find()
    .then((data) => {
      if (data && data.length) {
        res.send(data);
      } else {
        res.send({ message: "404 university not found!" });
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.send({ message: "404 university not found!" });
      }
    });
};

// create new university:
module.exports.createUniversity = async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    UniversityModel.create({ name, email, password })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "Email not available!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// update a university by id:
module.exports.updateUniversityById = async (req, res) => {
  const {
    _id,
    courses = [],
    faculties = [],
    students = [],
    admins = [],
  } = req.body;

  const pkg = { courses, faculties, students, admins };

  if (_id) {
    UniversityModel.findByIdAndUpdate(_id, pkg)
      .then((data) => {
        if (data) {
          res.send({ message: "Updated Successfully!" });
        } else {
          res.send({ message: "404 university not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 university not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// get a university by id:
module.exports.getUniversityById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    UniversityModel.findById(_id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.send({ message: "404 university not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          res.send({ message: "404 university not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// delete a university by id:
module.exports.deleteUniversityById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    UniversityModel.findByIdAndDelete(_id)
      .then((data) => {
        if (data) {
          res.send({ message: "Deleted Successfully!" });
        } else {
          res.send({ message: "404 university not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 university not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// Log in:
module.exports.universityAuth = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    UniversityModel.find({ email, password })
      .then((data) => {
        if (data) {
          res.send({ message: "Logged In!", universityId: data[0]._id });
        } else {
          res.send({ message: "Wrong Email or Password!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "Wrong Email or Password!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

const UserModel = require("../models/userModel");

// create new user:
module.exports.createUser = async (req, res) => {
  const { name, email, password, context } = req.body;

  if (name && email && password && context) {
    UserModel.create({ name, email, password, context })
      .then((data) => {
        res.send(data);
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

// update a user by id:
module.exports.updateUserById = async (req, res) => {
  const { _id, classes } = req.body;
  const pkg = { classes };

  if (_id) {
    UserModel.findByIdAndUpdate(_id, pkg)
      .then((data) => {
        if (data) {
          res.send({ message: "Updated Successfully!" });
        } else {
          res.send({ message: "404 user not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 user not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// get a user by id:
module.exports.getUserById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    UserModel.findById(_id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.send({ message: "404 user not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          res.send({ message: "404 user not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// delete a user by id:
module.exports.deleteUserById = async (req, res) => {
  const { _id } = req.body;

  if (_id) {
    UserModel.findByIdAndDelete(_id)
      .then((data) => {
        if (data) {
          res.send({ message: "Deleted Successfully!" });
        } else {
          res.send({ message: "404 user not found!" });
        }
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          res.send({ message: "404 user not found!" });
        }
      });
  } else {
    res.send({ message: "Invalid Information!" });
  }
};

// Log in:
module.exports.userAuth = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    UserModel.find({ email, password })
      .then((data) => {
        if (data) {
          res.send({ message: "Logged In!", userId: data[0]._id });
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

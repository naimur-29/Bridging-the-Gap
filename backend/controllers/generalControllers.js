const UserModel = require("../models/userModel");

module.exports.joinClass = async (req, res) => {
  const { _id, classes } = req.body;
  const _classId = classes[0];
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

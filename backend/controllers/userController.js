const UserModel = require("../models/userModel");

// create new user:
module.exports.createUser = async (req, res) => {
  const { name, email, password, context } = req.body;

  UserModel.create({ name, email, password, context })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
      }
    });
};

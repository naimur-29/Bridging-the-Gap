const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  context: {
    type: String,
    require: true,
  },

  classes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", UserSchema);

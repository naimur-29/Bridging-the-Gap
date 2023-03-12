const mongoose = require("mongoose");

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  courses: {
    type: Array,
    default: [],
  },

  faculties: {
    type: Array,
    default: [],
  },

  students: {
    type: Array,
    default: [],
  },

  admins: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("University", UniversitySchema);

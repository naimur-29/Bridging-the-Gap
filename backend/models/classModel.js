const mongoose = require("mongoose");
const FacultyModel = require("./userModel");

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  courseCode: {
    type: String,
    require: true,
  },

  faculty: {
    type: String,
    require: true,
  },

  students: {
    type: Array,
    default: [],
  },

  feedbacks: {
    type: Array,
    default: [],
  },

  stats: {
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model("Class", ClassSchema);

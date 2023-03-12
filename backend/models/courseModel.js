const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  code: {
    type: String,
    require: true,
  },

  classes: {
    type: Array,
    default: [],
  },

  stats: {
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model("Course", CourseSchema);

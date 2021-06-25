const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  pending: {
    type: String,
  },
  organizer: {
    type: String,
    default: "None",
  },
  attendent: {
    type: String,
    default: "None",
  },
});

exports.module = mongoose.model("Task", taskSchema);

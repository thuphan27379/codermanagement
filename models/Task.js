const mongoose = require("mongoose");

//Create Task schema
const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignee: {
      type: mongoose.Schema.Types.ObjectId, //?!employee
      ref: "User",
      default: null,
      required: false,
    },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// status of tasks
// choose the status OR edit a status
const statusTypes = ["pending", "working", "review", "done", "archive"];

//Create and export model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

const mongoose = require("mongoose");

//Create Task schema
const taskSchema = mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignee: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// const statusTypes = ["pending", "working", "review", "done", "archive"];

//Create and export model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

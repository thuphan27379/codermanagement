const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
} = require("../controllers/task.controllers.js");

/**
 * @route GET /tasks
 * @description get list of Tasks
 */
router.get("/", getAllTasks);

/**
 * @route POST /tasks
 * @description create a Task
 */
router.post("/", createTask);

/**
 * @route PUT /tasks
 * @description //Update a task
 */
router.post("/", editTask);

/**
 * @route DELETE /tasks
 * @description Delete task
 */
router.post("/", deleteTask);

//
const taskRouter = require("./task.api.js");
router.use("/tasks", taskRouter);

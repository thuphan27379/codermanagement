const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  editTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/task.controllers.js");

/**
 * @route GET /tasks
 * @description get list of Tasks
 */
router.get("/", getAllTasks);

/**
 * @route GET /tasks/:id
 * @description get list of Tasks & update status & assign/unassign
 */
router.get("/tasks/:id", getSingleTask);

/**
 * @route POST /tasks
 * @description create a Task
 */
router.post("/", createTask);

/**
 * @route PUT /tasks
 * @description //Update a task
 */
router.put("/", editTask);

/**
 * @route DELETE /tasks
 * @description Delete task
 */
router.delete("/", deleteTask);

//
module.exports = router;

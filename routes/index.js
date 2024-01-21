var express = require("express");
var router = express.Router();
const { sendResponse, AppError } = require("../helpers/utils.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome!");
});

router.get("/template/:test", async (req, res, next) => {
  const { test } = req.params;
  try {
    //turn on to test error handling
    if (test === "error") {
      throw new AppError(401, "Access denied", "Authentication Error");
    } else {
      sendResponse(
        res,
        200,
        true,
        { data: "template" },
        null,
        "template success"
      );
    }
  } catch (err) {
    next(err);
  }
});

// users
const usersApi = require("./user.api.js");
router.use("/users", usersApi);

// tasks
const taskApi = require("./task.api.js");
router.use("/tasks", taskApi);

// API endpoint:
// 1. Create a new user (with user's name)
/**
 * @route POST  /users
 * @description Create a new user
 * @requiredBody: name, id
 */
// router.post("/users", createUser);

// 2. Get all users (with filters)
/**
 * @route GET /users
 * @description Get list of users
 * @allowedQueries: name, id
 */
// router.get("/users", getAllUsers);

// 3. Search (for an employee) by name/id
/**
 * @route GET /users/:id  OR /users?name=""
 * @description Get user by name/id
 * @allowedQueries: name, id
 */
// router.get("/users?name=", getAllUsers);

// 4. Get all tasks of 1 user by name
/**
 * @route GET /users?name=""
 * @description show details of user like tasks,...
 */
// router.post("/users?name=", getAllUsers);

// 5. Create a new task
/**
 * @route POST /tasks/
 * @description Create a new task
 * @requiredBody: id, title, description, assignee, status, createdAt, updatedAt
 */
// router.post("/tasks", createTask);

// 6. get list of tasks
// Browse tasks with filter (sort) by
// status, createdAt, updatedAt
/**
 * @route GET /tasks/
 * @description list of tasks and sort
 */
// router.get("/tasks", getAllTasks);

// 7. Get a single task by id
/**
 * @route GET /tasks/:id
 * @description show details of task
 */
// router.get("/tasks/:id", getAllTasks);

// 8. Assign a task to a user or unassign ?
// edit a task
/**
 * @route PUT /tasks/
 * @description
 */
// router.put("/tasks/:id", editTask);

// 9. Update (the status of) a task. // edit a task
// 5 types of status:
// pending: work not started
// working: is working on it
// review: waiting for review result
// done : review is finished with satisfaction
// archive: package as references for future
/**
 * @route PUT /tasks
 * @description
 */
// router.put("/tasks/:id", editTask);

// 10. (Soft) delete a task
/**
 * @route DELETE /tasks
 * @description delete a task
 */
// confirm before delete
// router.delete("/tasks/:id", deleteTask);

module.exports = router;

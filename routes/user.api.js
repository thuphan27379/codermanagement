const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserByName,
} = require("../controllers/user.controllers.js");

/**
 * @route GET /users
 * @description get list of Users
 */
router.get("/", getAllUsers);

/**
 * @route POST /users
 * @description create a User
 */
router.post("/", createUser);

/**
 *  @route GET /users?name=Mr A
 *  @description Get user by name & get all details of user (tasks)
 */
router.get("/users?name=Mr A", getUserByName);

module.exports = router;

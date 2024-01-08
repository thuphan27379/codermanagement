const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
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

const userRouter = require("./user.api.js");
router.use("/user", userRouter);

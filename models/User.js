const mongoose = require("mongoose");

//Create User schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// User has two roles: manager and employee => a role field in User with String type and we need enum validator for its value. more
// The enum validator is an array that will check if the value given is an item in the array. If the value is not in the array, Mongoose will throw an error.

//Create and export model
const User = mongoose.model("User", userSchema);
module.exports = User;

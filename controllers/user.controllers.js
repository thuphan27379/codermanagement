const { sendResponse, AppError } = require("../helpers/utils.js");
const User = require("../models/User.js");

const userController = {};

//Create a new User OK
userController.createUser = async (req, res, next) => {
  //in real project you will getting info from req
  const info = req.body;
  try {
    //always remember to control your inputs
    if (!info) throw new AppError(402, "Bad Request", "Create User Error");
    //mongoose query
    const created = await User.create(info);

    sendResponse(
      res,
      200,
      true,
      { data: created },
      null,
      "Create User Success"
    );
  } catch (err) {
    next(err);
  }
};

//Get all Users OK
userController.getAllUsers = async (req, res, next) => {
  //in real project you will getting condition from from req then construct the filter object for query
  // empty filter mean get all
  const nameFilter = req.query.name;

  // if (req.query.name) {
  //   filter = ;
  // } else {
  // }

  const filter = nameFilter ? { name: nameFilter } : {};
  // console.log(filter);
  // console.log("hello");

  try {
    //mongoose query
    const listOfFound = await User.find(filter);

    sendResponse(
      res,
      200,
      true,
      { data: listOfFound },
      null,
      "Found list of Users success"
    );
  } catch (err) {
    next(err);
  }
};

// Search (for an employee) by name OK
//  @route GET /users/:id  OR /users?name=""
// userController.getUserByName = async (req, res, next) => {
//   // in real project you will getting condition from from req then construct the filter object for query
//   // empty filter mean get all

//   console.log(req.query.name);

//   const query = Users.find({});

//   try {
//     //mongoose query
//     const listOfFound = await User.find(query);
//     sendResponse(
//       res,
//       200,
//       true,
//       { data: listOfFound },
//       null,
//       "Found User success"
//     );
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = userController;

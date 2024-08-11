const { sendResponse, AppError } = require("../helpers/utils.js");
const Task = require("../models/Task.js");

const taskController = {};

//Create a new task OK
taskController.createTask = async (req, res, next) => {
  //in real project you will getting info from req
  const info = req.body;
  console.log(info);

  try {
    //always remember to control your inputs
    if (!info) throw new AppError(402, "Bad Request", "Create task Error");
    //mongoose query
    const created = await Task.create(info);
    sendResponse(
      res,
      200,
      true,
      { data: created },
      null,
      "Create task Success"
    );
  } catch (err) {
    next(err);
  }
};

//Get all tasks OK
taskController.getAllTasks = async (req, res, next) => {
  //in real project you will getting condition from from req then construct the filter object for query
  // empty filter mean get all
  const filter = {};
  try {
    //mongoose query
    const listOfFound = await Task.find(filter);
    sendResponse(
      res,
      200,
      true,
      { data: listOfFound },
      null,
      "Found list of tasks success"
    );
  } catch (err) {
    next(err);
  }
};

//Get all details of single task OK
taskController.getSingleTask = async (req, res, next) => {
  //in real project you will getting condition from from req then construct the filter object for query
  // empty filter mean get all
  // res.send();
  const taskId = req.params.id;
  console.log(taskId);

  const filter = { _id: taskId };

  try {
    //mongoose query
    const listOfFound = await Task.find(filter);
    console.log(listOfFound);

    sendResponse(
      res,
      200,
      true,
      { data: listOfFound },
      null,
      "Found task success"
    );
  } catch (err) {
    next(err);
  }
};

//Update a task OK
taskController.editTask = async (req, res, next) => {
  //in real project you will getting id from req. For updating and deleting, it is recommended for you to use unique identifier such as _id to avoid duplication
  //you will also get updateInfo from req
  // empty target and info mean update nothing
  const targetId = req.params.id;
  const updateInfo = req.body; //req.body
  console.log(updateInfo);

  //options allow you to modify query. e.g new true return latest update of data
  const options = { new: true };
  try {
    //mongoose query
    const updated = await Task.findByIdAndUpdate(targetId, updateInfo, options);

    sendResponse(
      res,
      200,
      true,
      { data: updated },
      null,
      "Update task success"
    );
  } catch (err) {
    next(err);
  }
};

//Delete a task OK
taskController.deleteTask = async (req, res, next) => {
  //in real project you will getting id from req. For updating and deleting, it is recommended for you to use unique identifier such as _id to avoid duplication
  // empty target mean delete nothing
  const targetId = req.params.id;
  //options allow you to modify query. e.g new true return latest update of data
  const options = { new: true };
  try {
    //mongoose query
    const deleted = await Task.findByIdAndDelete(targetId, options);

    sendResponse(
      res,
      200,
      true,
      { data: deleted },
      null,
      "Delete task success"
    );
  } catch (err) {
    next(err);
  }
};

module.exports = taskController;

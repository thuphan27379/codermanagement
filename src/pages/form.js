// form for create a new task, new user, edit task
const statusTypes = ["pending", "working", "review", "done", "archive"];

/*
Assign a task to a user or unassign them
Create user request must check body for : existence, including name , name's value is a valid string.
Create task request must check body for : existence, and other requirements per task schema.
All routes that require _id , must be checked for its existence and whether it is a mongo object id.
There's a rule for updating task status: when the status is set to done, it can't be changed to other value except archive
*/

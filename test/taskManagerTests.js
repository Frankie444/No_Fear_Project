const should = require("chai").should();
const TaskManager = require("../js/taskManager");

describe("TaskManager", function () {
  it("can be created, should contain no tasks", function () {
    const taskManager = new TaskManager();
    taskManager.tasks.should.have.lengthOf(0);
  });

  it("can add new tasks", function () {
    const taskManager = new TaskManager();

    taskManager.addTask(
      "test task",
      "bla bla",
      "tester",
      new Date(),
      "In Progress"
    );

    taskManager.tasks.should.have.lengthOf(1);

    taskManager.addTask(
      "test task 2",
      "bla bla",
      "tester",
      new Date(),
      "In Progress"
    );

    taskManager.tasks.should.have.lengthOf(2);

    taskManager.deleteTask(1);
    taskManager.tasks.should.have.lengthOf(1);
  });

  it("can get task", function () {
    const taskManager = new TaskManager();

    taskManager.addTask(
      "test task",
      "bla bla",
      "tester",
      new Date(),
      "In Progress"
    );

    const firstTask = taskManager.getTaskById(0);
    firstTask.taskName.should.equal("test task");
  });
});

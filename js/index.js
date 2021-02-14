//below creates an object instance using the TaskManager class
const anotherTask = new TaskManager(0);
console.log(anotherTask);

const form = document.getElementById("task-form");

//below creates hardcoding of new tasks (and pushes to this.tasks array)
anotherTask.addTask(
  "sleep",
  "shut your eyes",
  "saima",
  new Date(),
  "In Progress"
);
anotherTask.addTask(
  "study",
  "open your laptop",
  "fran",
  new Date(),
  "In Progress"
);
anotherTask.addTask("eat", "make sandwich", "anya", new Date(), "In Progress");
anotherTask.addTask(
  "washing",
  "clean football clothes",
  "fran",
  new Date(),
  "In Progress"
);

anotherTask.render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newTaskNameInput = document.querySelector("#task-name");
  let newTaskDescription = document.querySelector("#task-description");
  let newTaskAssignedTo = document.querySelector("#assigned-to");
  let newTaskDueDate = document.querySelector("#due-date");
  let newTaskStatus = document.querySelector("#status");

  let taskName = newTaskNameInput.value;
  let description = newTaskDescription.value;
  let assignedTo = newTaskAssignedTo.value;
  let dueDate = newTaskDueDate.value;
  let status = newTaskStatus.value;

  anotherTask.addTask(taskName, description, assignedTo, dueDate, status);

  newTaskNameInput.value = "";
  newTaskDescription.value = "";
  newTaskAssignedTo.value = "";
  newTaskDueDate.value = "";
  newTaskStatus.value = "";

  anotherTask.render();
});

const taskList = document.getElementById("task-list");
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const taskElement = event.target.parentElement.parentElement;
    const taskId = taskElement.id;
    anotherTask.completeTask(taskId);
    anotherTask.render();
  }
});
hi guys
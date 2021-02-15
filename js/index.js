//below creates an object instance using the TaskManager class
const taskManager = new TaskManager(0);
console.log(taskManager);

const form = document.getElementById("task-form");

taskManager.render();

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

  taskManager.addTask(taskName, description, assignedTo, dueDate, status);

  newTaskNameInput.value = "";
  newTaskDescription.value = "";
  newTaskAssignedTo.value = "";
  newTaskDueDate.value = "";
  newTaskStatus.value = "";

  taskManager.render();
});

const taskList = document.getElementById("task-list");
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const taskElement = event.target.parentElement.parentElement;
    const taskId = taskElement.id;
    taskManager.completeTask(taskId);
    taskManager.render();
  }
});

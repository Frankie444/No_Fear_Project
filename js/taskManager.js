const createTaskHtml = (
  taskId,
  Name,
  description,
  assignedTo,
  dueDate,
  status
) => {
  const html = `
    <div class="col mb-4">
    <div class="card text-center h-100" id="${taskId}">
    <img src="https://knilt.arcc.albany.edu/images/9/99/To-do.jpg" class="card-img-top col-9 row-img-center" alt="...">
    <div class="card-body">
    <h5 class="card-title">${Name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${dueDate}</p>
      <p class="card-text">${status}</p>
      <a href="#" class="btn btn-success done-button">Done</a>
      </div> 
      </div>
    </div>`;
  return html;
};

//create class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(taskName, description, assignedTo, dueDate, status) {
    //the method below creates multiple objects(instances)
    //but fist we need to save under a variable (called "task")
    let task = {
      id: this.currentId++,
      taskName: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;
    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];
      // Check if its the right task by comparing the task's id to the id passed as a parameter
      if (task.id === taskId) {
        // Store the task in the foundTask variable
        foundTask = task;
      }
    }
    // Return the found task
    return foundTask;
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === Number.parseInt(taskId));
  }

  completeTask(taskId) {
    let task = this.tasks.find((task) => task.id === Number.parseInt(taskId));
    if (task === undefined) {
      return;
    }

    task.status = "Done";
  }

  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      let date = new Date(task.dueDate);
      const readDate =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      const taskHtml = createTaskHtml(
        task.id,
        task.taskName,
        task.description,
        task.assignedTo,
        readDate,
        task.status
      );
      tasksHtmlList.push(taskHtml);

      const tasksHtml = tasksHtmlList.join("\n");

      const tasksList = document.querySelector("#task-list");
      tasksList.innerHTML = tasksHtml;
    }
  }
}

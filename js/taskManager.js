
const createTaskHtml = (Name, description, assignedTo, dueDate, status) => {
    const html = `
    <div class="card text-center float-left" style="width: 18rem;">
    <img src="https://knilt.arcc.albany.edu/images/9/99/To-do.jpg" class="card-img-top col-9 row-img-center" alt="...">
    <div class="card-body">
    <h5 class="card-title">${Name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignedTo}</p>
      <p class="card-text">${dueDate}</p>
      <p class="card-text">${status}</p>
      <a href="#" class="btn btn-success">Done</a>
      </div> `;
      return html; 
};



//create class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
 
addTask(taskName, description, assignedTo, dueDate, status){
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

render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      let date = new Date(task.dueDate);
      const readDate =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      const taskHtml = createTaskHtml(
        task.taskName,
        task.description,
        task.assignedTo,
        readDate,
        task.status,
      );
      tasksHtmlList.push(taskHtml);
    

    const tasksHtml = tasksHtmlList.join("\n");

    const tasksList = document.querySelector("#task-card");
    tasksList.innerHTML = tasksHtml;

}


}};

  

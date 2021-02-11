//below creates an object instance using the TaskManager class
const anotherTask = new TaskManager(0);
console.log(anotherTask);

//below creates hardcoding of new tasks (and pushes to this.tasks array)
anotherTask.addTask('sleep', 'shut your eyes', 'saima', '11/02/2021', 'In Progress');
anotherTask.addTask('study', 'open your laptop', 'fran', '22/02/2021', 'In Progress');
anotherTask.addTask('eat', 'make sandwich', 'anya', '22/02/2021', 'In Progress');
anotherTask.addTask('washing', 'clean football clothes', 'fran', '31/02/2021', 'In Progress');

//need to get event listener working so that the form field inputs push 
//to the array (instead of being hard coded). Code below is not working.

const form = document.getElementById("task-form");
form.addEventListener("submit", (sumbittedTask = () => {
    let taskName = document.querySelector('#task-name');
    let taskDescription = document.querySelector('#task-description');
    let assignedTo = document.querySelector('#assigned-to');
    let dueDate = document.querySelector('#due-date');
    let status = document.querySelector('#status');
    anotherTask.addTask(taskName.value , taskDescription.value , assignedTo.value , dueDate.value , status.value);
    console.log(sumbittedTask);
    
}));


/*validation - we used Bootrap instead 
  const validFormFieldInput = (data) => {
    const taskName = document.querySelector('#task-name');
    const taskDescription = document.querySelector('#task-description');
    const assignedTo = document.querySelector('#assigned-to');
    const dueDate = document.querySelector('#due-date');
    const status = document.querySelector('#status');
    console.log("name:  " + taskDescription.value);
  };

validFormFieldInput(); */


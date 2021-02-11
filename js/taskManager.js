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

};




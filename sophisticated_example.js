// Filename: sophisticated_example.js
// Description: This code demonstrates a sophisticated and creative implementation of a task management system using JavaScript.

// Task Manager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentTaskId = 1;
  }

  addTask(taskName, taskDescription) {
    const newTask = {
      id: this.currentTaskId++,
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  completeTask(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task ${taskId} marked as completed.`);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  }

  listAllTasks() {
    console.log("All tasks:");
    this.tasks.forEach((task) => {
      console.log(
        `Task ID: ${task.id}, Name: ${task.name}, Description: ${task.description}, Completed: ${task.completed}`
      );
    });
  }
}

// Example usage
const taskManager = new TaskManager();

taskManager.addTask("Create website design", "Design a responsive website layout");
taskManager.addTask("Implement website", "Code the website using HTML, CSS, and JavaScript");
taskManager.addTask("Testing", "Testing and bug fixing");
taskManager.addTask("Deployment", "Deploy the website to a live server");

taskManager.listAllTasks();

taskManager.completeTask(2);

taskManager.deleteTask(3);

taskManager.listAllTasks();

// Output:
// All tasks:
// Task ID: 1, Name: Create website design, Description: Design a responsive website layout, Completed: false
// Task ID: 2, Name: Implement website, Description: Code the website using HTML, CSS, and JavaScript, Completed: false
// Task ID: 3, Name: Testing, Description: Testing and bug fixing, Completed: false
// Task ID: 4, Name: Deployment, Description: Deploy the website to a live server, Completed: false
// Task 2 marked as completed.
// All tasks:
// Task ID: 1, Name: Create website design, Description: Design a responsive website layout, Completed: false
// Task ID: 2, Name: Implement website, Description: Code the website using HTML, CSS, and JavaScript, Completed: true
// Task ID: 4, Name: Deployment, Description: Deploy the website to a live server, Completed: false
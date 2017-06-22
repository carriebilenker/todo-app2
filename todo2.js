window.onload = function (){
  console.log("Time to get to work!");
}

// create general array of tasks from form submission
var tasks = []

// create variable for workers' tasks
var workers = {
  "Yakko":[],
  "Wakko":[],
  "Dot":[]
}

function createTask() {
  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {
    taskOwner: form.worker.value,
    taskDifficulty: form.difficulty.value,
    taskInformation: form.details.value
  }
  tasks.push(newTask);
  console.log("New task assigned to " + newTask.taskOwner)
  // referencing array inside of workers for selected task owner
  // push newTask to the taskowner
  workers[newTask.taskOwner].push(newTask);
  $('#tasks-' + newTask.taskOwner).append(workers[newTask.taskOwner])
  form.reset();
}

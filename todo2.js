window.onload = function (){
  console.log("Time to get to work!");
}
<<<<<<<
var tasks = []
var yakkoTasks

function createTask () {
  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {
    taskOwner: form.worker.value,
    taskDifficulty: form.difficulty.value,
    taskInformation: form.details.value
  }
}

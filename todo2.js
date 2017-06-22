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

  // The following loop looks at each task for the worker and creates a sentence
  // from it to append to the corresponding element

  for (i=0; i<workers[newTask.taskOwner].length; i++) {
    var currTask = workers[newTask.taskOwner][i]
    var target = document.getElementById('tasks-' + newTask.taskOwner)

    target.append(currTask['taskDifficulty'] + " - " + currTask['taskInformation']+"\n\n\n");
  }
  // $('#tasks-' + newTask.taskOwner).append(workers[newTask.taskOwner]);
  form.reset();
}

// GOOGLE CHART

google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawBasic);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.\

var toppingCounter = {
  tomato: 6,
  pepperoni: 7,
  shrimp: 1,
  pineapple: 6,
  peppers: 4
}

window.onload = function(){
  document.getElementById("pineapple").onclick=vote;
  document.getElementById("peppers").onclick=vote;
  document.getElementById("pepperoni").onclick=vote;
  document.getElementById("shrimp").onclick=vote;
  document.getElementById("tomato").onclick=vote;
}

function vote(topping) {
  console.log(this.id)
  toppingCounter[this.id] = toppingCounter[this.id] + 1
  drawBasic();
}

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'topping');
      data.addColumn('number', 'people who liked it');

      data.addRows([
        ['Tomato',toppingCounter.tomato],
        ['Pepperoni',toppingCounter.pepperoni],
        ['Shrimp',toppingCounter.shrimp],
        ['Pineapple',toppingCounter.pineapple],
        ['Peppers',toppingCounter.peppers]
      ]);

      var options = {
        title: 'Pizza Topping Popularity',
        hAxis: {
          title: 'Toppings',
        },
        vAxis: {
          title: 'People who liked it'
        }

      };
      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

        chart.draw(data, options);
  }




// google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(drawBasic);
//
// function drawBasic() {
//
//       var data = google.visualization.arrayToDataTable([
//         ['City', '2010 Population',],
//         ['New York City, NY', 8175000],
//         ['Los Angeles, CA', 3792000],
//         ['Chicago, IL', 2695000],
//         ['Houston, TX', 2099000],
//         ['Philadelphia, PA', 1526000]
//       ]);
//
//       var options = {
//         title: 'Population of Largest U.S. Cities',
//         chartArea: {width: '50%'},
//         hAxis: {
//           title: 'Total Population',
//           minValue: 0
//         },
//         vAxis: {
//           title: 'City'
//         }
//       };
//
//       var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//
//       chart.draw(data, options);
//     }

const title = document.getElementById('name');
const description = document.getElementById('description');

const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const displayPage = document.getElementById('display');

ITEM_TASKS = 'Task';

const today = new Date().toLocaleDateString();

const tasks = getTasksFromLocalStorage();
console.log(tasks);
const tasksSorted = tasks.sort(function (a, b) {
  return new Date(a.startDate) - new Date(b.startDate);
});
//const tasksSorted = tasks.sort((a, b) => a.startDate - b.startDate);

console.log(tasksSorted);

function getNumberOfDays(date) {
  // Set the start and end dates
  const endDate = new Date(date);
  const startDate = new Date();

  // Get the time in milliseconds for both dates
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();

  // Calculate the difference in milliseconds
  const difference = endTime - startTime;

  // Convert the difference to days by dividing by the number of milliseconds in a day (1000 * 60 * 60 * 24)
  const days = Math.round(difference / (1000 * 60 * 60 * 24));

  // Print the result
  return days;
}

function handleFormSubmit(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  let taskName = title.value;
  let taskDescription = description.value;
  let taskStartDate = startDate.value;
  let taskEndDate = endDate.value;
  let isDone = document.getElementById('status').checked;
  let taskObj = {
    title: taskName,
    description: taskDescription,
    startDate: taskStartDate,
    endDate: taskEndDate,
    status: isDone,
  };

  tasks.push(taskObj);
  localStorage.setItem(ITEM_TASKS, JSON.stringify(tasks));
  title.value = '';
  description.value = '';
  startDate.value = '';
  endDate.value = '';

  window.location.assign('./displayTask.html');
  displayPage(tasksSorted);
}

function displayTasks(arr) {
  const html = arr.map((task) => {
    const myClass = task.status
      ? 'green'
      : getNumberOfDays(task.endDate) < 0
      ? 'orange'
      : 'red';
    const content = `
                    <div class="${myClass} task">
                      <div class="accordion" >
                       
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            ${task.title}
                            </button>
                          </h2>
                          <div id="collapseOne" class="collapse" >
                            <div class="accordion-body">
                            ${task.description}
                            </div>
                        
                        </div>
                      </div>

 
                          
                          <div class="item">${task.startDate}</div>
                          <div class="item">${
                            getNumberOfDays(task.endDate) > 0
                              ? getNumberOfDays(task.endDate)
                              : 'Late'
                          } </div>
                          <div class="item">${task.status}</div>
                          <div class="del item">X</div>
                          <div class="check item">&#10003;</div>
                      </div>
                      <hr>    
                    `;

    return content;
  });

  displayPage.innerHTML = html.join('');
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem(ITEM_TASKS)) || [];
}

displayTasks(tasksSorted);

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('del');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const conf = confirm('Press OK to close this option');
    if (conf) {
      tasks.splice(i, 1);
      localStorage.setItem(ITEM_TASKS, JSON.stringify(tasks));
      window.location.reload();
    }
  };
}

// Add a "checked" symbol when clicking on a list item
let taskSelected = document.getElementsByClassName('check');

for (let i = 0; i < close.length; i++) {
  taskSelected[i].onclick = function () {
    tasks[i].status = true;
    localStorage.setItem(ITEM_TASKS, JSON.stringify(tasks));
    window.location.reload();
  };
}

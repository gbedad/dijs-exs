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
    console.log(task.startDate, today > task.endDate && task.status === false);
    const myClass = task.status
      ? 'green'
      : getNumberOfDays(task.endDate) < 0
      ? 'orange'
      : 'red';
    const content = `
                      <div class="${myClass} task">
                          Name: <span>${task.title}</span><br/>
                          Start Date: <span>${task.startDate}</span>
                          Days remaining: <span>${
                            getNumberOfDays(task.endDate) > 0
                              ? getNumberOfDays(task.endDate)
                              : 'Late'
                          } </span>
                          Completed: <span>${task.status}</span>
                          <span class="del">X</span>
                          <hr>
                      </div>
                      
      `;

    return content;
  });

  displayPage.innerHTML = html.join('');
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem(ITEM_TASKS)) || [];
}

displayTasks(tasksSorted);

function confirmTaskCompletion() {
  const isDone = document.getElementById('status').checked;

  return isDone;
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('task');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    tasks.splice(i, 1);
    localStorage.setItem(ITEM_TASKS, JSON.stringify(tasks));
    window.location.reload();
  };
}

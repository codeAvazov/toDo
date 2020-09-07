let tasks = [];
let finishedTasks = [];
let modal = document.getElementById("modal");
let modalInput = document.getElementById("modalInput");

function add() {
  let task = document.getElementById("taskValue").value;
  if (task !== "") {
    tasks.push(task);
    writeTask();
    task = "";
  } else {
    alert("Enter task");
  }
}

function writeTask() {
  let list = `<ul class='list-group'>
    ${tasks.map(
      (item, index) => `<li class='list-group-item d-flex align-items-center'>
      <div class='mr-auto' style='overflow : hidden'>${item}</div>
        <button type='button' class='btn btn-primary mx-1' onclick='del(${index})'>Delete</button>
        <button type='button' class='btn btn-primary mx-1' onclick='upd(${index})'>Update</button>
        <button type='button' class='btn btn-primary mx-1' onclick='fin(${index})'>Finish</button>
    </li>`
    )}
  </ul>`;
  document.getElementById("result").innerHTML = list;
}

function del(n) {
  let arg = tasks.splice(n, 1);
  writeTask();
}

function fin(n) {
  let finTask = tasks.splice(n, 1);
  finishedTasks.push(finTask[0]);
  writeTask();
}

function show() {
  if (finishedTasks.length !== 0) {
    let finList = `<ul class='list-group'>
    ${finishedTasks.map(
      (item) => `<li class='list-group-item'>
      ${item}
    </li>`
    )}
  </ul>`;
    document.getElementById("finishTasks").innerHTML = finList;
  } else {
    alert("No finished tasks");
  }
}

function upd(n) {
  modal.style.display = "flex";
  let task = tasks.slice(n, n + 1);
  modalInput.value = task;
  modalInput.setAttribute("index", n);
}

function updateTask() {
  modal.style.display = "none";
  let n = modalInput.getAttribute("index");
  let updateTask = modalInput.value;
  tasks[n] = updateTask;
  writeTask();
}

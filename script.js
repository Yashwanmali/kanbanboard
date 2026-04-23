let taskId = 0;

// Add new task
function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (value === "") return;

  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.id = "task-" + taskId++;
  task.innerText = value;

  task.addEventListener("dragstart", drag);

  document.getElementById("todo").appendChild(task);

  input.value = "";
}

// Allow dropping
function allowDrop(event) {
  event.preventDefault();
}

// Drag start
function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// Drop task
function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text/plain");
  const task = document.getElementById(taskId);

  // Ensure it drops inside column, not inside another task
  const column = event.target.closest(".column");
  if (column) {
    column.appendChild(task);
  }
}

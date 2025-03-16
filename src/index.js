document.addEventListener("DOMContentLoaded", () => {
  //Writ your code here

  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");
  const tasks = [
    "Wake up and prepare breakfast",
    "Wash the dishes",
    "Attend morning standup",
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = formInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      formInput.value = "";
    }
  });
  function addTask(taskText) {
    tasks.push(taskText);
    console.log(`Task added: ${taskText}`);
    console.log("Current tasks:", tasks);
    renderTaskList();
  }
  function removeTask(taskText) {
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log(`Task removed: ${taskText}`);
      console.log("Current tasks:", tasks);
      renderTaskList();
    }
  }
  function renderTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task + " ";
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "delete";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
        removeTask(task);
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  renderTaskList();
});

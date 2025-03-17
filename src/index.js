document.addEventListener("DOMContentLoaded", () => {
  //Writ your code here
  const todoList = [];
  //1. Select the form and attach the submit event
  const taskForm = document.getElementById("create-task-form");
  // 1 (b) -> attach submit event
  taskForm.addEventListener("submit", (event) => {
    // Stop the default behaviour of form submission on
    // websites which is reloading the page
    event.preventDefault();

    // The logic of retrieving the inputed task should be inside the
    // callback function
    const taskInput = document.getElementById("new-task-description");

    // Store the todo inside the todoList array
    todoList.push(taskInput.value.trim());

    console.log(taskInput.value)

    // Reset form input
    // taskInput.value = '';
    taskForm.reset(); //When dealing with forms, this is an easy way to reset every input

    // Iterate through the list array and display them
    renderTodoList(todoList);
  });
});

function renderTodoList(todos) {
  const unorderedListElement = document.getElementById("tasks");

  // Clear out the initial list items
  unorderedListElement.innerHTML = "";

  // Iterate over the todos
  todos.forEach((todo) => {
    // Create a li item dynamically
    const li = document.createElement("li");
    li.textContent = todo;

    // Create a cancel button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    // Attach a click event to the button
    deleteButton.addEventListener("click", () => {
      // Filter out the clicked todo
      // Const filteredTodos = todos.filter((item) => item !== todo);

      const index = todos.indexOf(todo);

      // This deletes the todo and since we are using .splice method, it mutates the original array
      todos.splice(index, 1);

      // Call the renderTodoList function again with the updated todos through recurssion
      renderTodoList(todos);
    });

    // Attach this button to our create li
    li.appendChild(deleteButton);

    // Attach the created li to the unorderedListElement
    unorderedListElement.appendChild(li);
  });
}

function addTask() {
  let taskInput = document.getElementById("taskInput")
  let taskText = taskInput.value.trim()
  if (taskText === "") return

  let li = document.createElement("li")
  li.innerHTML = `<input type="checkbox" onchange="toggleDone(this)"> 
                        <span class="task-text">${taskText}</span> 
                        <button class="delete-btn" onclick="removeTask(this)">❌</button>`

  document.getElementById("taskList").appendChild(li)
  taskInput.value = ""
}

function toggleDone(checkbox) {
  let span = checkbox.nextElementSibling
  span.classList.toggle("done", checkbox.checked)
}

function removeTask(button) {
  button.parentElement.remove()
}

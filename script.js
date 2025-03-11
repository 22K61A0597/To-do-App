document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <span>&times;</span>`;
        taskList.appendChild(li);
        taskInput.value = "";
  
        // Delete task on clicking the "×" button
        li.querySelector("span").addEventListener("click", () => {
          taskList.removeChild(li);
        });
      }
    });
  });
  
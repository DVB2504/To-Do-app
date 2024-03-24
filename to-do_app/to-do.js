
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle adding a new task
    function addTask() {
      var taskInput = document.querySelector(".todo-list input[type='text']");
      var taskList = document.querySelector(".todo-list ul");
  
      if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
  
        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
  
        li.appendChild(deleteButton); // Append delete button to task item
  
        taskList.appendChild(li);
        taskInput.value = "";
  
        // Add event listener to delete the task when clicked
        deleteButton.addEventListener("click", function() {
          this.parentNode.remove();
        });
      } else {
        alert("Please enter a task!");
      }
    }
  
    // Add event listener to the button to add tasks
    document.querySelector(".todo-list button").addEventListener("click", addTask);
  
    // Add event listener to existing tasks for deletion
    var tasks = document.querySelectorAll(".todo-list ul li button.delete-btn");
    tasks.forEach(function(deleteButton) {
      deleteButton.addEventListener("click", function() {
        this.parentNode.remove();
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    let timerInterval;
    let seconds = 0, minutes = 0, hours = 0;
  
    function startTimer() {
      timerInterval = setInterval(updateTimerDisplay, 1000);
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
    }
  
    function updateTimerDisplay() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      document.getElementById("hours").textContent = padZero(hours);
      document.getElementById("minutes").textContent = padZero(minutes);
      document.getElementById("seconds").textContent = padZero(seconds);
    }
  
    function padZero(num) {
      return num < 10 ? "0" + num : num;
    }
  
    document.getElementById("startTimer").addEventListener("click", startTimer);
    document.getElementById("stopTimer").addEventListener("click", stopTimer);
  });
  
  
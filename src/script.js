document.addEventListener("DOMContentLoaded", function() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const weekSchedule = document.getElementById("weekSchedule");

    // Initialize schedule for each day
    weekDays.forEach(day => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("rpg-day");
        dayContainer.setAttribute("id", day);

        const dayTitle = document.createElement("h2");
        dayTitle.classList.add("day-title");
        dayTitle.textContent = day;
        dayContainer.appendChild(dayTitle);

        const taskList = document.createElement("ul");
        taskList.classList.add("task-list");
        dayContainer.appendChild(taskList);

        weekSchedule.appendChild(dayContainer);
    });

    // Add new task
    document.getElementById("taskForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedDay = document.getElementById("daySelect").value;
        const taskTitle = document.getElementById("taskTitle").value;
        const taskTime = document.getElementById("taskTime").value;
        const taskDetails = document.getElementById("taskDetails").value;

        if (taskTitle && taskTime && taskDetails) {
            const taskBox = createTaskElement(taskTitle, taskTime, taskDetails);
            document.getElementById(selectedDay).querySelector(".task-list").appendChild(taskBox);

            // Clear form inputs
            document.getElementById("taskTitle").value = '';
            document.getElementById("taskTime").value = '';
            document.getElementById("taskDetails").value = '';
        }
    });

    // Create a task element
    function createTaskElement(title, time, details) {
        const taskBox = document.createElement("li");
        taskBox.classList.add("task-box");

        const taskTitle = document.createElement("h3");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = title;

        const taskTime = document.createElement("p");
        taskTime.classList.add("task-time");
        taskTime.textContent = time;

        const taskDetails = document.createElement("p");
        taskDetails.classList.add("task-details");
        taskDetails.textContent = details;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            taskBox.remove();
        });

        taskBox.appendChild(taskTitle);
        taskBox.appendChild(taskTime);
        taskBox.appendChild(taskDetails);
        taskBox.appendChild(deleteButton);

        return taskBox;
    }
});
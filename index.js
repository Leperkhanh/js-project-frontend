const listsEndPoint = "http://localhost:3000/api/v1/lists";
const tasksEndPoint = "http://localhost:3000/api/v1/tasks";

document.addEventListener("DOMContentLoaded", () => {
  getLists();
  getTasks();
});

function getLists() {
  fetch(listsEndPoint)
    .then((resp) => resp.json())
    .then((lists) => {
      lists.data.forEach((list) => {
        const listsContainer = document.querySelector(".lists-container");
        const listDiv = document.createElement("div");
        const listItem = document.createElement("h1");
        const renderList = () => {
          listItem.textContent = `${list.attributes.name}`;
          listDiv.appendChild(listItem);
          listsContainer.appendChild(listDiv);
        };

        renderList();
      });
    });
}

function getTasks() {
  fetch(tasksEndPoint)
    .then((resp) => resp.json())
    .then((tasks) => {
      console.log(tasks);
      tasks.data.forEach((task) => {
        const tasksContainer = document.querySelector(".tasks-container");
        const taskDiv = document.createElement("div");
        const taskItem = document.createElement("h1");
        const renderTask = () => {
          taskItem.textContent = `${task.attributes.body}`;
          taskDiv.appendChild(taskItem);
          tasksContainer.appendChild(taskDiv);
        };

        renderTask();
      });
    });
}

// taskItem.textContent = `${task.body}`;
//           taskDiv.appendChild(taskItem);
//           tasksContainer.appendChild(taskDiv);

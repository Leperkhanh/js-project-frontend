const listsEndPoint = "http://localhost:3000/api/v1/lists";
const tasksEndPoint = "http://localhost:3000/api/v1/tasks";

document.addEventListener("DOMContentLoaded", () => {
  getLists();
  getTasks();

  const createListForm = document.querySelector(".list-form");

  createListForm.addEventListener("submit", e => {
    createListHandler(e);
  });
});

function getLists() {
  fetch(listsEndPoint)
    .then(resp => resp.json())
    .then(lists => {
      lists.data.forEach(list => {
        const listsContainer = document.querySelector(".lists-container");
        const listItem = document.createElement("div");
        let newList = new List(list, list.attributes);

        listItem.setAttribute("data-id", `${list.id}`);
        listItem.innerHTML = newList.renderList();

        listsContainer.appendChild(listItem);
      });
    })
    .catch(err => console.log(err));
}

function getTasks() {
  fetch(tasksEndPoint)
    .then(resp => resp.json())
    .then(tasks => {
      tasks.data.forEach(task => {
        renderTask(task);
      });
    })
    .catch(err => console.log(err));
}

function renderTask(task) {
  const tasksContainer = document.querySelector(".tasks-container");
  const taskDiv = document.createElement("div");
  const taskItem = document.createElement("p");
  const appendTask = () => {
    taskItem.setAttribute("data-id", `${task.id}`);
    taskItem.textContent = `${task.attributes.body}`;
    taskDiv.appendChild(taskItem);
    tasksContainer.appendChild(taskDiv);
  };

  appendTask();
}

function createListHandler(e) {
  e.preventDefault();
  const nameInput = document.querySelector(".list-form-input input").value;

  postList(nameInput);
}

function postList(name) {
  const bodyData = { name };

  fetch(listsEndPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  })
    .then(resp => resp.json())
    .then(list => {
      const listData = list.data;
      const listsContainer = document.querySelector(".lists-container");
      const listItem = document.createElement("div");

      let newList = new List(list, listData.attributes);

      listItem.setAttribute("data-id", `${list.id}`);
      listItem.innerHTML = newList.renderList();
      listsContainer.appendChild(listItem);
    })
    .catch(err => console.log(err));
}

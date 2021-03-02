const endPoint = "http://localhost:3000/api/v1/lists";

document.addEventListener("DOMContentLoaded", () => {
  getLists();
});

function getLists() {
  fetch(endPoint)
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

// taskItem.textContent = `${task.body}`;
//           taskDiv.appendChild(taskItem);
//           tasksContainer.appendChild(taskDiv);

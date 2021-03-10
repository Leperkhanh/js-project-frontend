const app = new App();

// const listsEndPoint = "http://localhost:3000/api/v1/lists";
// const tasksEndPoint = "http://localhost:3000/api/v1/tasks";

// document.addEventListener("DOMContentLoaded", () => {
//   getLists();
//   getTasks();

//   const createListForm = document.querySelector(".list-form");

//   createListForm.addEventListener("submit", e => {
//     createListHandler(e);
//   });
// });

// function getLists() {
//   fetch(listsEndPoint)
//     .then(resp => resp.json())
//     .then(lists => {
//       lists.data.forEach(list => {
//         let newList = new List(list, list.attributes);

//         newList.renderList();
//       });
//     })
//     .catch(err => console.log(err));
// }

// function getTasks() {
//   fetch(tasksEndPoint)
//     .then(resp => resp.json())
//     .then(tasks => {
//       tasks.data.forEach(task => {
//         let newTask = new Task(task, task.attributes);

//         newTask.renderTask();
//       });
//     })
//     .catch(err => console.log(err));
// }

// function createListHandler(e) {
//   e.preventDefault();
//   const nameInput = document.querySelector(".list-form-input input").value;

//   postList(nameInput);
// }

// function postList(name) {
//   const bodyData = { name };

//   fetch(listsEndPoint, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(bodyData),
//   })
//     .then(resp => resp.json())
//     .then(list => {
//       const listData = list.data;
//       let newList = new List(list, listData.attributes);

//       newList.renderList();
//     })
//     .catch(err => console.log(err));
// }

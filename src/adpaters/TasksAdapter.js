class TasksAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tasks';
    this.nestedUrl = 'http://localhost:3000/api/v1/lists';
  }

  getTasks() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  createTask(taskListId, taskValue) {
    const task = {
      list_id: taskListId,
      body: taskValue,
    };
    return fetch(`http://localhost:3000/api/v1/lists/${taskListId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    }).then(response => response.json());
  }
}

// createTask(taskListId, taskValue) {
//   const task = {
//     list_id: taskListId
//     body: taskValue,
//   };
//   return fetch(this.baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ task }),
//   }).then(response => response.json());
// }

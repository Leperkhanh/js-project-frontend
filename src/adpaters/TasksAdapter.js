class TasksAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/tasks';
  }

  getTasks() {
    return fetch(this.baseUrl).then(response => response.json());
  }
}

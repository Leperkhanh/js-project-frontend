class Task {
  constructor(task) {
    this.id = task.id;
    this.body = task.body;
    Task.all.push(this);
  }

  renderTask() {
    return `
      <p>${this.body}</p>
    `;
  }
}

Task.all = [];

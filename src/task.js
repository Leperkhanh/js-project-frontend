class Task {
  constructor(task, attributes) {
    this.id = task.id;
    this.body = attributes.body;
    Task.all.push(this);
  }

  renderTask() {
    return `
        <p>${this.body}</p>
      `;
  }
}

Task.all = [];

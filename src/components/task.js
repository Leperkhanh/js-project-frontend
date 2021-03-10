class Task {
  constructor(task, attributes) {
    this.id = task.id;
    this.body = attributes.body;
    Task.all.push(this);
  }

  renderTask() {
    const taskContainer = document.querySelector('.tasks-container');
    const taskDiv = document.createElement('div');
    const taskItem = document.createElement('h1');

    const appendTask = () => {
      taskItem.textContent = `${this.body}`;
      taskDiv.setAttribute('data-id', `${this.id}`);
      taskDiv.classList.add('mx-5', 'my-2');
      taskDiv.appendChild(taskItem);
      taskContainer.appendChild(taskDiv);
    };
    appendTask();
  }
}

Task.all = [];

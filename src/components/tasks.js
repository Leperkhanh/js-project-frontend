class Tasks {
  constructor() {
    this.tasks = [];
    this.adapter = new TasksAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadTasks();
  }

  initBindingsAndEventListeners() {
    this.tasksContainer = document.querySelector('.tasks');
  }

  fetchAndLoadTasks() {
    this.adapter
      .getTasks()
      .then(tasks => {
        tasks.data.forEach(task =>
          this.tasks.push(new Task(task, task.attributes))
        );
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    console.log(this.task);
    this.tasksContainer.innerHTML = this.tasks
      .map(task => task.renderTask())
      .join('');
  }
}

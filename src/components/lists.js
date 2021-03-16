class Lists {
  constructor() {
    this.lists = [];
    this.tasks = [];
    this.adapter = new ListsAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadLists();
  }

  initBindingsAndEventListeners() {
    this.listsTableContainer = document.querySelector('.lists-table');
    this.listForm = document.querySelector('.list-form');
    this.listInput = document.getElementById('list-input');
    this.addTaskButton = document.querySelector('.add-task-button');
    this.taskFormContainer = document.querySelector('.task-form-container');
    this.listForm.addEventListener('submit', this.createList.bind(this));
    this.listsTableContainer.addEventListener(
      'click',
      this.deleteList.bind(this)
    );
    this.listsTableContainer.addEventListener(
      'click',
      this.viewList.bind(this)
    );
    this.addTaskButton.addEventListener('click', this.createTask.bind(this));
  }

  deleteList(e) {
    if (e.target.classList.contains('delete-list-button')) {
      const listRow = e.target.parentElement.parentElement;
      const listName = listRow.childNodes[1].textContent;
      listRow.remove();

      const listId = listRow.dataset.id;
      this.adapter.deleteList(listName, listId).then(list => {
        console.log(list);
      });
    }
  }

  viewList(e) {
    if (e.target.classList.contains('view-list-button')) {
      this.tasks = [];
      const tasksContainer = document.querySelector('.tasks-container');
      const tasksTableContainer = document.querySelector('.tasks-table');
      const listId = e.target.parentElement.parentElement.dataset.id;

      tasksContainer.classList.toggle('hidden');

      this.adapter
        .viewList(listId)
        .then(list => {
          const listTasks = list.data.attributes.tasks;

          listTasks.forEach(task => {
            this.tasks.push(new Task(task));
          });
        })
        .then(() => {
          tasksTableContainer.innerHTML = this.tasks
            .map(task => task.renderTask())
            .join('');
        });
    }
  }

  createList(e) {
    e.preventDefault();
    const listValue = this.listInput.value;

    this.adapter.createList(listValue).then(list => {
      this.lists.push(new List(list, list.data.attributes));
      this.listInput.value = '';
      this.render();
    });
  }

  createTask() {
    this.taskFormContainer.classList.toggle('hidden');
    this.taskFormContainer.addEventListener('submit', function (e) {
      e.preventDefault();
      this.tasks = [];
      const taskFormContainer = document.querySelector('.task-form-container');
      const taskListId = document.getElementById('task').dataset.listId;
      const taskValue = document.getElementById('task-input').value;
      console.log(taskListId, taskValue);
      const tasksAdapter = new TasksAdapter();
      tasksAdapter.createTask(taskListId, taskValue).then(task => {
        const tasksContainer = document.querySelector('.tasks-table');
        const taskData = task.data;
        const taskAttributes = task.data.attributes;
        this.tasks.push(new Task(taskData, taskAttributes));
        tasksContainer.innerHTML += this.tasks
          .map(task => task.renderTask())
          .join('');
      });
      taskFormContainer.classList.toggle('hidden');
    });
  }

  fetchAndLoadLists() {
    this.adapter
      .getLists()
      .then(lists => {
        lists.data.forEach(list =>
          this.lists.push(new List(list, list.attributes))
        );
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.listsTableContainer.innerHTML = this.lists
      .map(list => list.renderRow())
      .join('');
  }
}

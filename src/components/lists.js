class Lists {
  constructor() {
    this.lists = [];
    this.adapter = new ListsAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadLists();
  }

  initBindingsAndEventListeners() {
    this.listsTableContainer = document.querySelector('.lists-table');
    this.listForm = document.querySelector('.list-form');
    this.listInput = document.getElementById('list-input');
    this.listForm.addEventListener('submit', this.createList.bind(this));
  }

  createList(e) {
    e.preventDefault();
    const listValue = this.listInput.value;

    this.adapter.createList(listValue).then(list => {
      console.log(list);
      this.lists.push(new List(list, list.data.attributes));
      this.render();
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
    // for (const list of this.lists) {
    //   console.log(list);
    //   const listRow = document.createElement('tr');
    //   const listTitleData = document.createElement('td');
    //   const listActionsData = document.createElement('td');
    //   const viewLink = document.createElement('a');
    //   const deleteLink = document.createElement('a');
    //   listTitleData.textContent = `${list.name}`;
    //   viewLink.textContent = `View`;
    //   deleteLink.textContent = `Delete`;
    //   viewLink.classList.add('cursor-pointer');
    //   deleteLink.classList.add('cursor-pointer', 'pl-5', 'delete-list-button');
    //   deleteLink.setAttribute('id', `delete-list-button-${this.id}`);
    //   listActionsData.classList.add('text-right', 'pr-20');
    //   listRow.classList.add(
    //     'border-b-2',
    //     `hover:bg-blue-700`,
    //     'round-lg',
    //     'leading-8',
    //     'shadow-lg'
    //   );
    //   listActionsData.appendChild(viewLink);
    //   listActionsData.appendChild(deleteLink);
    //   listRow.appendChild(listTitleData);
    //   listRow.appendChild(listActionsData);
    //   this.listsTableContainer.appendChild(listRow);
  }
}

class Task {
  constructor(task, taskAttributes = null) {
    this.id = task.id;
    this.body = task.body || taskAttributes.body;
    this.list_id = task.list_id || taskAttributes.list.id;
  }

  renderTask() {
    return `
    <tr class=hover:bg-blue-700" id=task data-id=${this.id} data-list-id=${this.list_id}>
    <td class="font-extrabold text-2xl pt-3">${this.body}</td>
    </tr>
    `;
  }
}

{
  /* <div class="flex text-right w-9/12 m-auto justify-between hover:bg-blue-700">
      <p class="font-extrabold text-2xl mb-5">${this.body}</p>
      <div class="justify-items-end">
        <a class="view-list-button cursor-pointer">Edit</a>
        <a class="delete-list-button cursor-pointer pl-5" id="delete-list-button">Delete</a>
      </div>
      </div> */
}

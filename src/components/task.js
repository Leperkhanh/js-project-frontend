class Task {
  constructor(task) {
    this.id = task.id;
    this.body = task.body;
  }

  renderTask() {
    return `
    <tr class="hover:bg-blue-700" data-id=${this.id}>
    <td class="font-extrabold text-2xl pt-3">${this.body}</td>
    <td class="text-right pr-20">
      <a class="edit-task-button cursor-pointer">Edit</a>
      <a class="delete-tasl-button cursor-pointer pl-5" id="delete-task-button">Delete</a>
    </td>
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

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

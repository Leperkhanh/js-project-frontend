class List {
  constructor(list, attributes) {
    this.id = list.id || list.data.id;
    this.name = attributes.name;
  }

  renderRow() {
    return `
      <tr class="hover:bg-blue-700" data-id=${this.id}>
          <td class="font-extrabold text-2xl pt-3">${this.name}</td>
          <td class="text-right pr-20">
            <a class="view-list-button cursor-pointer">View</a>
            <a class="delete-list-button cursor-pointer pl-5 ml-10">Delete</a>
          </td>
      </tr>
    `;
  }
}

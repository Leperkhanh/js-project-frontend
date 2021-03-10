class List {
  constructor(list, attributes) {
    this.id = list.id || list.data.id;
    this.name = attributes.name;
  }

  renderRow() {
    return `
      <tr data-id=${this.id}>
        <td>${this.name}</td>
        <td class="text-right pr-20">
          <a class="cursor-pointer">View</a>
          <a class="cursor-pointer pl-5 delete-list-button" id="delete-list-button">Delete</a>
        </td>
      </tr>
    `;
  }
}

// class List {
//   constructor(list, attributes) {
//     this.id = list.id;
//     this.name = attributes.name;
//     this.userName = attributes.user.email;
//     List.all.push(this);
//   }

//   renderList() {
//     const listTable = document.querySelector('.list-table');

//     const appendList = () => {
//       const listRow = document.createElement('tr');
//       const listTitleData = document.createElement('td');
//       const listActionsData = document.createElement('td');
//       const viewLink = document.createElement('a');
//       const deleteLink = document.createElement('a');

//       listTitleData.textContent = `${this.name}`;
//       viewLink.textContent = `View`;
//       deleteLink.textContent = `Delete`;
//       viewLink.classList.add('cursor-pointer');
//       deleteLink.classList.add('cursor-pointer', 'pl-5', 'delete-list-button');
//       deleteLink.setAttribute('id', `delete-list-button-${this.id}`);
//       listActionsData.classList.add('text-right', 'pr-20');
//       listRow.classList.add(
//         'border-b-2',
//         `hover:bg-blue-700`,
//         'round-lg',
//         'leading-8',
//         'shadow-lg'
//       );
//       listActionsData.appendChild(viewLink);
//       listActionsData.appendChild(deleteLink);
//       listRow.appendChild(listTitleData);
//       listRow.appendChild(listActionsData);
//       listTable.appendChild(listRow);
//     };
//     appendList();
//   }
// }

// List.all = [];

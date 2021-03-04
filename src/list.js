class List {
  constructor(list, attributes) {
    this.id = list.id;
    this.name = attributes.name;
    List.all.push(this);
  }

  renderList() {
    return `<h1>${this.name}</h1>`;
  }
}

List.all = [];

// `
// <div data-id=${this.id}>
//     <h1>${this.name}</h1>
// </div>

// `

// const listsContainer = document.querySelector(".lists-container");
//     const listDiv = document.createElement("div");
//     const listItem = document.createElement("h1");

//     const appendList = () => {
//       listItem.setAttribute("data-id", `${this.id}`);
//       listItem.textContent = `${this.name}`;
//       listDiv.appendChild(listItem);
//       listsContainer.appendChild(listDiv);
//     };
//     appendList();

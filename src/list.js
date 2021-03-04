class List {
  constructor(list, attributes) {
    this.id = list.id;
    this.name = attributes.name;
    this.userName = attributes.user.email;
    List.all.push(this);
  }

  renderList() {
    const listsContainer = document.querySelector(".lists-container");
    const listDiv = document.createElement("div");
    const listItem = document.createElement("h1");

    const appendList = () => {
      listItem.setAttribute("data-id", `${this.id}`);
      listItem.textContent = `${this.name}`;
      listDiv.appendChild(listItem);
      listsContainer.appendChild(listDiv);
    };
    appendList();
  }
}

List.all = [];
class List {
  constructor(list, attributes) {
    this.id = list.id;
    this.name = attributes.name;
    this.userName = attributes.user.email;
    List.all.push(this);
  }

  renderList() {
    return `
    <h1>${this.name}</h1>
    `;
  }
}

List.all = [];

class List {
  constructor(list, attributes) {
    this.id = list.id;
    this.name = attributes.name;
    List.all.push(this);
  }
}

List.all = [];

class ListsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/lists';
  }

  getLists() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  createList(listValue) {
    const list = {
      name: listValue,
    };
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ list }),
    }).then(response => response.json());
  }

  deleteList(listName, id) {
    const list = {
      name: listName,
      id: id,
    };
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ list }),
    }).then(response => response.json());
  }
}

export class Contact {
  constructor(id, name = '', email = '', city = '', isFavorite = false) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.city = city;
    this.isFavorite = isFavorite;
  }
}

export class Task {
  constructor(id, name = '', category = 'home', completed = false) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.completed = completed;
  }
}

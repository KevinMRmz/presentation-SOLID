// Bad Code
export class NotesServices {
  async getNotes() {
    // ...
  }

  async createNote() {
    // ...
  }

  async getUser() {
    // ...
  }
}

// Clean code
export class NotesService {
  async getNotes() {
    // ...
  }

  async createNote() {
    // ...
  }
}

class UserService {
  async getUser() {
    // ...
  }
}

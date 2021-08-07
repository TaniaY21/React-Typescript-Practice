// descripe how todos look . Class

class TodoModel {
  id: string;
  text: string;
  date: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
    this.date = new Date().toISOString();
  }
}

export default TodoModel;

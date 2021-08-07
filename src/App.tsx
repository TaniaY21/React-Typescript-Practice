import { NewTodo } from './Components/NewTodo/NewTodo';
import { useState } from 'react';
import Todos from './Components/Todos/Todos';
import TodoModel from './Models/TodoModel';
function App() {
  const [todo, setTodo] = useState<TodoModel[]>([]);

  function handleNewTodo(todoText: string) {
    const newTodo = new TodoModel(todoText);

    setTodo((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function removeTodo() {}
  return (
    <div>
      <NewTodo onAddTodo={handleNewTodo} />
      <Todos items={todo} onRemove={removeTodo} />
    </div>
  );
}

export default App;

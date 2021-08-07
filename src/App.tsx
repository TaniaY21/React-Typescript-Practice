import { NewTodo } from './Components/NewTodo/NewTodo';
import Todos from './Components/Todos/Todos';
import TodosContextProvider from './Store/todo-context';
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

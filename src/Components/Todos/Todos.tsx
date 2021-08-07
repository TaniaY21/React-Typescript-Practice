import React, { useContext } from 'react';
import styles from './Todos.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { TodosContext } from '../../Store/todo-context';

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        >
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;

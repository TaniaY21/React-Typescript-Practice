import React from 'react';
import TodoModel from '../../Models/TodoModel';
import styles from './Todos.module.css'
import TodoItem from '../TodoItem/TodoItem';

//generic type defined here. Define own props. Can make option by 'items?:'
const Todos: React.FC<{ items: TodoModel[] }> = (props) => {

  
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;

import React, { useRef, useContext } from 'react';
import styles from './NewTodo.module.css';
import { TodosContext } from '../../Store/todo-context';

export const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let todoText = todoInputRef.current!.value;
    todoCtx.addTodo(todoText);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Enter todo</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

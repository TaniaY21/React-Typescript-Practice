import React, { useRef } from 'react';
import styles from './NewTodo.module.css';

// export const NewTodo: React.FC<{ onAddTodo: Function }> = (props) => {

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (
  props
) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let todoText = todoInputRef.current!.value;
    // let userInput = event.target.value;
    props.onAddTodo(todoText);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Enter todo</label>
      <input ref={todoInputRef} type="text" id="text" />
      <button>Add todo</button>
    </form>
  );
};

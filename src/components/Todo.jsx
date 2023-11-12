import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}) {
  const {id, text, status} = todo;
  const handleChange = (e) => {
    onUpdate({
      ...todo,
      status: e.target.checked ? "completed" : "active"
    })
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li className={`${styles.todo} ${status === 'completed' && styles.done}`}>
      <input 
        id={id}
        className={styles.checkbox}
        type="checkbox" 
        checked = {status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>{text}</label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}><BsTrashFill /></button>
      </span>
    </li>
  );
}


import React from 'react';
import { BsTrashFill } from 'react-icons/bs';

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
    <li key={id}>
      <input 
        type="checkbox" 
        checked = {status === 'completed'}
        onChange={handleChange}
      />{text}
      <button onClick={handleDelete}><BsTrashFill /></button>
    </li>
  );
}


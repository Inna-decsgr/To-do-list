import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

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
    <li>
      <input 
        id={id}
        type="checkbox" 
        checked = {status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}><BsTrashFill /></button>
    </li>
  );
}


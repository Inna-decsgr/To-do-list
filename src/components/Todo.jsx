import React, { useEffect, useRef, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineRollback } from 'react-icons/ai';
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onEdit, onDelete}) {
  const {id, text, status} = todo;
  const [newText, setNewText] = useState('');
  const [edit, setEdit] = useState(false);
  const handleChange = (e) => {
    onUpdate({
      ...todo,
      status: e.target.checked ? "completed" : "active"
    })
  }
  const handleDelete = () => onDelete(todo);
  const handleEdit = () => {
    setEdit(!edit);
  }
  const updateText = (e) => {
    setNewText(e.target.value)
  }
  const handleStorage = (edit) => {
    if(newText.trim().length !== 0) {
      onEdit({
        ...todo,
        text: newText
      })
    }else {
      setEdit(!edit)
    }
    setEdit(!edit)
  }
  const list = useRef(null);
  const scrollToBottom = () => {
    list.current ?.scrollIntoView({behavior:'smooth'})
  }
  useEffect(() => {
    scrollToBottom()
  },[todo])

  return (
    <li className={`${styles.todo} ${status === 'completed' && styles.done}`} ref={list}>
      {
        edit ? (
          <>
            <form onSubmit={handleStorage}>
              <input
                className={styles.input}
                type="text"
                onChange={updateText}
              />
            </form>
            <span className={styles.icon}>
              <button className={styles.edit} type='button' onClick={handleStorage}><BsCheckLg /></button>
              <button className={styles.button} type='button' onClick={()=> setEdit(!edit)}><AiOutlineRollback /></button>
            </span>
          </>
        ) : (
          <>
            <input 
              id={id}
              className={styles.checkbox}
              type="checkbox" 
              checked = {status === 'completed'}
              onChange={handleChange}
            />
            <label className={styles.text} htmlFor={id}>{text}</label>
            <span className={styles.icon}>
              <button className={styles.edit} onClick={handleEdit}><AiTwotoneEdit /></button>
              <button className={styles.button} onClick={handleDelete}><BsTrashFill /></button>
            </span>
          </>
        )
      }
      
    </li>
  );
}


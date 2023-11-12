import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(()=> readTodosFromLocalstorage())
  const handleAdd = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => t.id === updated.id ? updated : t))
  }
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
  }
  const handleEdit = (edited) => {
    if(edited) {
      setTodos(todos.map((t) => t.id === edited.id ? edited : t))
    }
  }

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  const filtered = getFilteredItems(todos, filter)
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filtered.map((item) =>
            <Todo 
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
function readTodosFromLocalstorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : []
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos
  }else {
    return todos.filter((todo) => todo.status === filter)
  }
}
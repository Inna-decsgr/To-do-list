import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

const filters = ['all', 'active', 'completed']
export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={filter => setFilter(filter)}/>
      <TodoList filter={filter}/>
    </>
  );
}


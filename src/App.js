import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed']
export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={filter => setFilter(filter)}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}


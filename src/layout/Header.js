import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';

function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <AddTodo />
    </header>
  );
}

export default Header;
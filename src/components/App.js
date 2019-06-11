import React from 'react';
import './App.scss';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;

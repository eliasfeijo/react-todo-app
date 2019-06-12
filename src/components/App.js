import React from 'react';
import './App.scss';
import TodoList from './TodoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoList
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <main>
          <TodoList 
            todos={this.state.todos} 
            deleteTodo={this.deleteTodo} 
            toggleCompleted={this.toggleCompleted}
          />
        </main>
      </div>
    );
  }

  toggleCompleted = (id) => {
    this.setState(state => ({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }));
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((t) => id !== t.id)]
    });
    console.log(this.state.todos);
  }

}

const todoList = [
  {
    id: 1,
    title: "Work",
    completed: false
  },
  {
    id: 2,
    title: "Take bath",
    completed: true
  },
  {
    id: 3,
    title: "Sleep",
    completed: false
  }
];

export default App;

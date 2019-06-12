import React from 'react';
import './App.scss';
import TodoList from './TodoList/TodoList';
import Header from '../layout/Header';

const uuidv4 = require('uuid/v4');

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
        <Header onSubmit={this.addTodo} />
        <main>
          <TodoList 
            todos={this.state.todos} 
            deleteTodo={this.deleteTodo} 
            toggleCompleted={this.toggleCompleted}
          />
        </main>
        <footer>
          <em>2019 - Made by Elias Feijó</em>
        </footer>
      </div>
    );
  }

  addTodo = (title) => {
    const todo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  } 

  toggleCompleted = (id) => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
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
    id: uuidv4(),
    title: "Work",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Take bath",
    completed: true
  },
  {
    id: uuidv4(),
    title: "Sleep",
    completed: false
  }
];

export default App;

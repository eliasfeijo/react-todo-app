import React from 'react';
import './App.scss';
import TodoList from './TodoList/TodoList';
import Header from '../layout/Header';

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
      </div>
    );
  }

  addTodo = (title) => {
    const todo = {
      id: 4,
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

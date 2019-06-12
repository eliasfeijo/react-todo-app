import React from 'react';
import './App.scss';
import TodoList from './TodoList/TodoList';
import Header from '../layout/Header';
import uuid from 'uuid';
import axios from 'axios';
import AddTodo from './AddTodo/AddTodo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from '../pages/About';

const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(`${urlTodos}?_limit=5`)
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <AddTodo onSubmit={this.addTodo} />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <main>
              <TodoList 
                todos={this.state.todos} 
                deleteTodo={this.deleteTodo} 
                toggleCompleted={this.toggleCompleted}
              />
            </main>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        <footer>
          <em>2019 - Made by Elias Feijó</em>
        </footer>
      </div>
      </Router>
    );
  }

  addTodo = (title) => {
    axios.post(`${urlTodos}`, {title: title})
      .then(response => {
        const todo = {
          // JSONPlaceholder API always returns the same id
          // Generate the id here so that react doesn't complain
          id: uuid.v4(),
          title: response.data.title,
          completed: false
        };
        this.setState(state => ({
          todos: [...state.todos, todo]
        }));
      })
      .catch(error => {
        console.log(error);
      });
    
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
    // Hard-coded id because JSONPlaceholder doesn't accept uuid v4 id format
    axios.put(`${urlTodos}/13`, {
      id: id,
      title: this.state.todos.find(todo => todo.id === id).title
    })
    .then(response => {
      console.log("Updated Todo: " + response.data.title);
    })
    .catch(error => {
      console.log(error);
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((t) => id !== t.id)]
    });
    axios.delete(`${urlTodos}/${id}`)
    .then(response => {
      console.log("Deleted Todo with id: " + id);
    })
    .catch(error => {
      console.log(error);
    });
  }

}

export default App;

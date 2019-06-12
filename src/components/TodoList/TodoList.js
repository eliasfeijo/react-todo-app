import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends React.Component {
  render() {
    return this.props.todos.map((todo) =>
      <TodoItem 
        key={todo.id} 
        item={todo} 
        deleteTodo={this.props.deleteTodo}
        toggleCompleted={this.props.toggleCompleted}
      />);
  }
}

export default TodoList;
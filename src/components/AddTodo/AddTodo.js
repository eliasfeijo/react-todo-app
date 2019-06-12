import React from 'react';
import './AddTodo.scss';
class AddTodo extends React.Component {
  render() {
    return (
      <form className="add-todo">
        <input type="text" placeholder="Add Todo..." />
        <input type="submit" />
      </form>
    );
  }
}

export default AddTodo;
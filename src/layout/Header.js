import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <AddTodo onSubmit={this.props.onSubmit} />
      </header>
    );
  }
}

export default Header;
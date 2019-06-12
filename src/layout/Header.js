import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <p>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </p>
      </header>
    );
  }
}

export default Header;
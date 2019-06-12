import React from 'react';
import './TodoItem.scss';

class TodoItem extends React.Component {
  render() {
    const { id, title, completed } = this.props.item;
    return (
      <div className="todo-item">
        <input type="checkbox" checked={completed} onChange={this.props.toggleCompleted.bind(this, id)} />
        <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          { title }
        </p>
        <button className="button-delete" onClick={this.props.deleteTodo.bind(this, id)}>x</button>
      </div>
    )
  }
}

export default TodoItem;
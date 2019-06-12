import React from 'react';
import './AddTodo.scss';
class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.state = { title: '' }
  }
  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          value={this.state.title} 
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit.bind(this, this.state.title).call();
    this.setState({title: ''});
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }
}

export default AddTodo;
import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodoBtn" onClick={(e) => this.removeTodo(this.props.id) }> X </button>
        {this.props.todo.text}
      </div>
    );
  }
}

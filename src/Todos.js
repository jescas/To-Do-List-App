import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  
  render() {
    return this.props.todos.map((todo) => (
      <Todo todo={todo} check={this.props.check} delete={this.props.delete}/>
    ))
  }
};

export default Todos;

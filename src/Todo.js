import React from 'react';

class Todo extends React.Component {
  completedStyle = () => {
    if (this.props.todo.completed) {
      return {
        color: 'green'
      }
    }
  };

  render() {
    let {id, name} = this.props.todo;
    return (
      <div style={this.completedStyle()}>
        <input type="checkbox" onChange={this.props.check.bind(this, id)}/> {' '}
        {name}
        <button onClick={this.props.delete.bind(this, id)} style={deleteStyle}>del</button>
      </div>
    )
  }
};

const deleteStyle = {
  borderRadius: '50%',
  textAlign: 'right',
  marginLeft: '250px'
};

export default Todo;

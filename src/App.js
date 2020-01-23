import React from 'react';
import './App.css';
import Todos from './Todos';
import Form from './Form';

class App extends React.Component {
  
  state = {
    todos: [{
      id: 1,
      name: 'Test to-do',
      completed: false
    }]
  }
  check = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  };

  delete = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  };

  addtodo = (name) => {
    const newtodo = {
      id: 2,
      name,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newtodo]})
  };

  render() {
    return (
    <div className="Application">
      <Form addtodo={this.addtodo}/>
      <strong>To Do List:</strong>
     <Todos todos={this.state.todos} check={this.check} delete={this.delete}/>
    </div>
    )
  }
};

export default App;

//Program is unfinished
import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: ''
  };

  submit = (e) => {
    this.props.addtodo(this.state.name)
    this.setState({ name: ''})
    e.preventDefault()
  };

  change = (e) => this.setState({name: e.target.value});

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Enter in a To-Do" value={this.state.name} onChange={this.change}></input>
        <button type= "submit">Add!</button>
      </form>
    )
  }
};

export default Form;

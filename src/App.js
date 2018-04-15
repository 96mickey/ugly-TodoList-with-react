import React, { Component } from 'react';
import './App.css';

const Todo = ({value}) => (
  <li>{value}</li>
  );
   

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos : [],
      newTodo: ''
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(e){
        e.preventDefault();
        const todos = [...this.state.todos, this.state.newTodo];
        this.setState({todos, newTodo: ''})
    }

  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((value, index) => (
      <Todo key={index} value={value} />
    ));



    return (
      <div className="App">
        <center><h2>Todo App</h2></center>
        <form onSubmit={this.clicked}>
          <input type="text" value={newTodo} onChange={(e) => this.setState({newTodo: e.target.value})} />
          <button type="submit">Add</button>
        </form>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;

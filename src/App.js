import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'
import TodoItem from './components/todoItem.js'

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        todos: [
          {id: 0, text: "Finish to-do"},
          {id: 1, text: "Read before sleeping"}
        ],
        nextId: 3
      }

      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({todos: todos, nextId: ++this.state.nextId});
    }

    removeTodo(id) {
      let todos = this.state.todos.slice();
      todos = todos.filter((todo, index) => todo.id !== id);
      this.setState({todos: todos});
    }
    render() {
        return (
            <div className="App">
                <div className="Todo-wrapper">
                  <Header/>
                  <TodoInput todoText="" addTodo={this.addTodo}/>
                  <ul>
                    {
                      this.state.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                      })
                    }
                  </ul>
                </div>
            </div>
        );
    }
}
export default App;

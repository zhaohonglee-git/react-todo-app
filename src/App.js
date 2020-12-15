import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: '买菜' },
      { id: 2, content: '打扫卫生' },
      { id: 3, content: '读书' },
    ]
  }

  deletTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    }
    )
  }

  addTodo = (newtodo) => {
    newtodo.id = Math.random()

    let todos = [...this.state.todos, newtodo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container" >
        <h1 className='center blue-text'>任务列表</h1>
        <Todos todos={this.state.todos} deletTodo={this.deletTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

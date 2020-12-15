import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state, 'AddTodo子组件打印内容')
    this.props.addTodo(this.state)
    // 重置状态
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
          <label htmlFor="">添加新任务：</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

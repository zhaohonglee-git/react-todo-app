import React from 'react'

const Todos = ({ todos, deletTodo }) => {
  const todoList = todos.length ? (todos.map(todo => {
    return (
      <div className='collection-item' key={todo.id}>
        <span onClick={() => deletTodo(todo.id)} >{todo.content}</span>
      </div>
    )
  })) : (
      <p className='center'>恭喜你完成了所有代办事项</p>
    )

  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default Todos

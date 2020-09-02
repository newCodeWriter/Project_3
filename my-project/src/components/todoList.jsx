import React from 'react'
import Todo from './todo'

function TodoList({ todos, toggleTodo, onDelete }){
  if(todos.length === 0){
    return <div></div>
  }
  else{
    return(
      <div className="task_page">
        <div className="task_list">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} remove={() => onDelete(todo.id)} onClick={() => toggleTodo(todo.id)} />
        ))}
        </div>
      </div>
    )
  }
}

export default TodoList
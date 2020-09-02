import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const AddTodo = (props) => {
  const [task, setTask] = useState('')

  function handleChange(event){
    setTask(event.target.value)
  }
  
  function handleClick(){
    if(task === ''){
      document.getElementById('task_input').focus();
    }
    else{
      props.onClick(task)
      document.getElementById('task_input').value = ''; 
    }
  }

  return (
    <div className="task_page">
        <input type="text" name="task_input" id="task_input" onChange={handleChange} placeholder="Enter a task..."/>
        <button type="button" name="task_btn" id="task_btn" onClick={handleClick}>
          Add
        </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: item => {
      dispatch(addTodo(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
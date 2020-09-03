import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

const AddTodo = ({onClick}) => {
  const [task, setTask] = useState('')

  function handleChange(event){
    setTask(event.target.value)
  }
  
  function handleClick(){
    var input = document.getElementById('task_input');
    if(task === ''){
      input.focus();
    }
    else{
      onClick(task);
      setTask('');
      input.value = '';
    }
  }

  return (
    <div className="task_page task_field">
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
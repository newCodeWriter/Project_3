import React from 'react'

const Todo = ({ onClick, completed, text, key }) => (
    <div className="task_item">
        <input 
            type="checkbox" 
            name={`checkit_${key}`} 
            id={`checkit_${key}`} 
            onClick={onClick} 
            title="select to mark as completed" 
        />
        <label 
            for={`checkit_${key}`} 
            className="task_label" 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            &nbsp;&nbsp;{text}
        </label>
        <i className="far fa-trash-alt"></i>
        <hr/>
    </div>
)

export default Todo
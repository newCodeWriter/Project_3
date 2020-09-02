import React from 'react'

const Todo = ({ onClick, completed, text, key, remove }) => (
    <div className="task_item">
        <input 
            type="checkbox" 
            name={`checkit_${key}`} 
            id={`checkit_${key}`} 
            onClick={onClick} 
        />
        <label 
            for={`checkit_${key}`} 
            className="task_label" 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            &nbsp;&nbsp;{text}
        </label>
        <i className="far fa-trash-alt" onClick={remove} title="delete item from list"></i>
        <hr/>
    </div>
)

export default Todo
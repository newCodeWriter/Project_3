import React from 'react'

const Todo = ({ onClick, completed, text, id, remove }) => {
    if (completed)
        return (
            <div className="task_item">
                <input
                    type="checkbox"
                    name={`checkit_${id}`}
                    id={`checkit_${id}`}
                    onClick={onClick}
                    checked
                />
                <label
                    htmlFor={`checkit_${id}`}
                    className="task_label"
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>
                    {text}
                </label>
                <i className="far fa-trash-alt" onClick={remove} title="delete item from list"></i>
                <hr />
            </div>
        )
    else
        return (
            <div className="task_item">
                <input
                    type="checkbox"
                    name={`checkit_${id}`}
                    id={`checkit_${id}`}
                    onClick={onClick}
                />
                <label
                    htmlFor={`checkit_${id}`}
                    className="task_label"
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>
                    {text}
                </label>
                <i className="far fa-trash-alt" onClick={remove} title="delete item from list"></i>
                <hr />
            </div>
        )

}

export default Todo
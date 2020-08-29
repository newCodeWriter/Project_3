import React from 'react';

class Tasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {task: [], active: [], completed: []};
        this.task_input = React.createRef();
    }

    handleTask = () =>{
        if(this.task_input.current.value === ''){
            this.setState(state => ({task: [...state.task]}));
            document.getElementById('task_input').focus();
        }
        else{
            this.setState(state => ({task: [...state.task, this.task_input.current.value]}));
        }
    }
    deleteTask = (event) =>{
        var stateCopy = this.state.task.slice();
        var el = event.target.id;
        stateCopy.splice(el, 1);
        this.setState({task: stateCopy});
    }
    componentDidUpdate(){
        document.getElementById('task_input').value = '';
    }

    render(){
        
        return(
            <div id="task_page">
                <input type="text" name="task_input" id="task_input" ref={this.task_input} placeholder="Task..." />
                <input type="button" name="task_btn" id="task_btn" value="Add" onClick={this.handleTask}/>
                <UpdateTask update={this.state.task} delete={this.deleteTask}/>
                <button type="button" id="all_btn" className="show_btns">All ({this.state.task.length})</button>
                <button type="button" className="show_btns">Active ({this.state.active.length})</button>
                <button type="button" className="show_btns">Completed ({this.state.completed.length})</button>
            </div>
        )
    }
}

class UpdateTask extends React.Component{

    render(){

        if(this.props.update.length === 0){
            return <div></div> 
        }
        else{
            return(
                <div id="task_list">
                    {this.props.update.map((element, index) => 
                    <div className="task_item" key={index}>
                        <input type="checkbox" name={`checkit_${index}`} id={`checkit_${index}`} title="select to mark as completed" />
                        <label for={`checkit_${index}`} className="task_label">&nbsp;&nbsp;{element}</label><i className="far fa-trash-alt" id={index} onClick={this.props.delete}></i><hr/>
                    </div>)} 
                </div>
            )
        }
    }
}


export default Tasks; 
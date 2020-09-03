import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { VisibilityFilters, toggleTodo, deleteTodo } from '../actions/actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos       
      //return all (conpleted and active) items
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)   
      //filter list of items and return all completed items
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)   
      //filter list of items and return all active items
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter) //filter state.todos according to the state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  onDelete: index => dispatch(deleteTodo(index))
})

const VisibleTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodos
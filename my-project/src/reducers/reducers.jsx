import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "../constants/constants";
import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions/actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)     
          ? {...todo, completed: !todo.completed}     //on click of item, changes boolean value of completed
          : todo
      )
    default:
      return state
  }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
  
const todoApp = combineReducers({ todos, visibilityFilter });

export default todoApp;
  
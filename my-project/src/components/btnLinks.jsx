import React from 'react'
import Filter from '../containers/filter'
import { VisibilityFilters } from '../actions/actions'
import { connect } from 'react-redux'

const BtnLinks = ({ all, active, completed }) => (
    <div className="task_page">
      <div>Show: </div>
      <Filter filter={VisibilityFilters.SHOW_ALL}>All ({all.length})</Filter>
      <Filter filter={VisibilityFilters.SHOW_ACTIVE}>Active ({active.length})</Filter>
      <Filter filter={VisibilityFilters.SHOW_COMPLETED}>Completed ({completed.length})</Filter>
    </div>
  )
  
  const mapStateToProps = (state) => ({
    all: state.todos, 
    active: state.todos.filter(t => !t.completed),
    completed: state.todos.filter(t => t.completed)
  })
 
  
export default connect(mapStateToProps)(BtnLinks)
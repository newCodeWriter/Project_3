let nextId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextId++,
  text
})

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = index => ({
  type: 'DELETE_TODO',
  index
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
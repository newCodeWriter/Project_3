import React from 'react'
import BtnLinks from './components/btnLinks'
import AddTodo from './containers/addTodo'
import VisibleTodos from './containers/visibleTodos'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodos />
    <BtnLinks />
  </div>
)

export default App
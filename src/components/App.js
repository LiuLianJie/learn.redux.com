import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibelTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
		<AddTodo />
		<VisibelTodoList />
		<Footer />
	</div>
)

export default App
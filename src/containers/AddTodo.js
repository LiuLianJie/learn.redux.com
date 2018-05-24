import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const clickHandle = (dispatch) => {
	dispatch({type:'USER_FETCH_REQUESTED', payload:{'id':'sss'}});
}

const AddTodo = ({ dispatch }) => {
	let input

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if(!input.value.trim()) {
						return
					}
					dispatch(addTodo(input.value))
					input.value = ''
				}}
			>
				<input ref={node => input = node}/>
				<button type="submit">
					Add Todo
				</button>
			</form>
			<button onClick={()=> clickHandle(dispatch) }>test</button>
		</div>
	)
}

export default connect()(AddTodo);
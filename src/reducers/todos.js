import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO' :
			console.log("ADD_TODO");
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => 
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		case 'USER_FETCH_SUCCEEDED':
			console.log("USER_FETCH_SUCCEEDED", action);
			return state
		default:
			return state
	}
}

function getUser() {
	return new Promise((resovle, reject) => {
		setTimeout(() => {
			const user = {
				id: 1,
				username: 'jliu',
				password: 'lj6912010'
			}
			resovle(user);
		}, 2000);
	})
}

function* fetchUser(action) {
	const user = yield call(getUser);
	console.log("userL:",user);
	yield put({type:"USER_FETCH_SUCCEEDED", user:user});
}

export const mySega = function* (){
	yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


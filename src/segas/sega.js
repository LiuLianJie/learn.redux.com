// import { call, put, takeEvery, takeLatest } from 'redux-sega/effects'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

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

function* mySaga() {
	yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga
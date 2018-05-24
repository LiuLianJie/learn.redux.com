import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
//import {mySega} from './reducers/todos'
import mySega from './segas/sega'
import Root from './components/Root'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySega)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()

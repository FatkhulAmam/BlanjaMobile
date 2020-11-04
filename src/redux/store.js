import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducers from './reducers'

const store = createStore(
    rootReducers,
    applyMiddleware(
        promiseMiddleware,
        logger
    )
)

export default store
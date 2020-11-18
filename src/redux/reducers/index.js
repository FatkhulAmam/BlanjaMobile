import {combineReducers} from 'redux'

import register from './register'
import auth from './auth'
import product from './product'
import category from './category'
import profile from './profile'
import search from './search'

export default combineReducers({
    register,
    auth,
    product,
    category,
    profile,
    search
})
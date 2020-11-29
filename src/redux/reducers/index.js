import {combineReducers} from 'redux'

import register from './register'
import auth from './auth'
import product from './product'
import category from './category'
import profile from './profile'
import editUser from './editProfile'
import search from './search'
import address from './getAddress'
import addAddress from './makeAddress'

export default combineReducers({
    register,
    auth,
    product,
    category,
    profile,
    editUser,
    search,
    address,
    addAddress
})
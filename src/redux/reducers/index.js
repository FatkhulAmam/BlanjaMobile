import {combineReducers} from 'redux'

import register from './register'
import auth from './auth'
import product from './product'
import detailProduct from './detailProduct'
import productCategory from './productByCategory'
import category from './category'
import profile from './profile'
import editUser from './editProfile'
import search from './search'
import address from './getAddress'
import addAddress from './makeAddress'
import addCart from './addToCart'
import myCart from './getCart'

export default combineReducers({
    register, auth, profile, editUser,
    product, detailProduct, productCategory,
    category, search,
    address, addAddress,
    addCart, myCart
})
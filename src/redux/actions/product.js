import http from '../../helpers/http'
import qs from 'qs'

const getNewProductAction = () => ({
  type: 'GET_DATA',
  payload: http().get('product/?sort[input_date]=desc')
})

const getDetailProduct = (id) => ({
  type: 'GET_DETAIL',
  payload: http().get(`product/${id}`)
})

const addToCart = (token, itemsId, amount) => ({
  type: 'ADD_CART',
  payload: http(token).post('cart', qs.stringify({itemsId, amount}))
})

const showMyCart = (token) => ({
  type: 'GET_CART',
  payload: http(token).get('cart')
})

export { getNewProductAction, getDetailProduct, addToCart, showMyCart }
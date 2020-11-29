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

export { getNewProductAction, getDetailProduct }
import http from '../../helpers/http'
import qs from 'qs'

const getNewProductAction = () => ({
  type: 'GET_DATA',
  payload: http().get('product/?sort[input_date]=desc')
})

export { getNewProductAction }
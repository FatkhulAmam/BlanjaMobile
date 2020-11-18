import http from '../../helpers/http'
import qs from 'qs'

const getNewProductAction = (data) => ({
  type: 'GET_DATA',
  payload: http().get('product/?sort[input_date]=desc', qs.stringify(data))
})

export { getNewProductAction }
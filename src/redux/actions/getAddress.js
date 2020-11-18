import http from '../../helpers/http'
import qs from 'qs'

const getAddressAction = (token, data) => ({
  type: 'GET_ADDRESS',
  payload: http(token).get('user/address', qs.stringify(data))
})

export { getAddressAction }
import http from '../../helpers/http'
import qs from 'qs'

const getSearchProductAction = (keyword ,data) => ({
  type: 'GET_SEARCH',
  payload: http().get(`product/?search[name]=${keyword}`, qs.stringify(data))
})

export { getSearchProductAction }
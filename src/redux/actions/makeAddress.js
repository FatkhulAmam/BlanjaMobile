import http from '../../helpers/http'
import qs from 'qs'

const makeAddress = (token, home, recipientName, recipientPhone, address, city, postalCode) => ({
    type: 'MAKE_ADDRESS',
    payload: http(token).post('user/address', qs.stringify({ home, recipientName, recipientPhone, address, city, postalCode }))
})

export { makeAddress }

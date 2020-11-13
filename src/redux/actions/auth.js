import http from '../../helpers/http'
import qs from 'qs'

const loginAction = (email, password) => ({
    type: 'AUTH_USER',
    payload: http().post('auth/login/custommer', qs.stringify({email, password}))
})

export {loginAction}
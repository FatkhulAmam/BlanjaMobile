import http from '../../helpers/http'
import qs from 'qs'

const registerAction = (name, email, password) => ({
    type: 'MAKE_ACCOUNT',
    payload: http().post('auth/register/custommer', qs.stringify({name, email, password}))
})

export {registerAction}
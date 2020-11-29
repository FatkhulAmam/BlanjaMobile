import http from '../../helpers/http'
import qs from 'qs'

const editProfile=(token, user_name, birth) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('user', qs.stringify({user_name, birth}))
})

export {editProfile}

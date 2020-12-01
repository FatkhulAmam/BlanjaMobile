import http from '../../helpers/http';
import qs from 'qs';

const getProfile = (token) => ({
  type: 'GET_USER',
  payload: http(token).get('user/'),
});

const editProfile = (token, user_name, birth) => ({
  type: 'EDIT_PROFILE',
  payload: http(token).patch('user', qs.stringify({user_name, birth})),
});

export {getProfile, editProfile};

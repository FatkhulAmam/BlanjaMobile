import http from '../../helpers/http';
import qs from 'qs';

const loginAction = (email, password) => ({
  type: 'AUTH_USER',
  payload: http().post('auth/login/custommer', qs.stringify({email, password})),
});

const registerAction = (name, email, password) => ({
  type: 'MAKE_ACCOUNT',
  payload: http().post(
    'auth/register/custommer',
    qs.stringify({name, email, password}),
  ),
});

export {loginAction, registerAction};

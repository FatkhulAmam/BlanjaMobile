import http from '../../helpers/http';
import qs from 'qs';

const getAddressAction = (token, data) => ({
  type: 'GET_ADDRESS',
  payload: http(token).get('user/address', qs.stringify(data)),
});

const getAddressIdAction = (token, id) => ({
  type: 'ADDRESS_ID',
  payload: http(token).get(`user/address/${id}`),
});

const makeAddress = (
  token,
  home,
  recipientName,
  recipientPhone,
  address,
  city,
  postalCode,
) => ({
  type: 'MAKE_ADDRESS',
  payload: http(token).post(
    'user/address',
    qs.stringify({
      home,
      recipientName,
      recipientPhone,
      address,
      city,
      postalCode,
    }),
  ),
});

export {getAddressAction, makeAddress, getAddressIdAction};

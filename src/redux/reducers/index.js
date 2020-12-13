import {combineReducers} from 'redux';

import register from './register';
import auth from './auth';
import cart from './cart';
import product from './product';
import category from './category';
import profile from './profile';
import address from './address';

export default combineReducers({
  register,
  auth,
  cart,
  profile,
  product,
  category,
  address,
});

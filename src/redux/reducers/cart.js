const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isDelete: false,
  isAdded: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get my cart
    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    }
    // add to cart
    case 'ADD_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
        message: 'pending',
      };
    }
    case 'ADD_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'add cart rejected',
      };
    }
    case 'ADD_CART_FULFILLED': {
      return {
        ...state,
        isError: false,
        isAdded: true,
        isLoading: false,
        message: 'add cart success',
      };
    }
    // delete cart
    case 'DEL_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
        message: 'pending',
      };
    }
    case 'DEL_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'delete cart rejected',
      };
    }
    case 'DEL_CART_FULFILLED': {
      return {
        ...state,
        isError: false,
        isDeleted: true,
        isLoading: false,
        message: 'delete cart success',
      };
    }
    default: {
      return state;
    }
  }
};

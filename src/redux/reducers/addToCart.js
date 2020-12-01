const initialState = {
  isAdded: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

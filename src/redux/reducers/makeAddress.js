const initialState = {
  isRegister: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
        message: 'pending',
      };
    }
    case 'MAKE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'make address',
      };
    }
    case 'MAKE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isError: false,
        isRegister: true,
        isLoading: false,
        message: 'add address success',
      };
    }
    default: {
      return state;
    }
  }
};

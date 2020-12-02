const initialState = {
  result: [],
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is error at request data',
      };
    }
    case 'GET_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        result: action.payload.data.data,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        message: '',
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADDRESS_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADDRESS_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'ADDRESS_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};

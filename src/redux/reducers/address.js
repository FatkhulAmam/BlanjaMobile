const initialState = {
  dataAddress: [],
  dataAddressById: {},
  isLoading: false,
  isError: false,
  isMaked: false,
  isUpdated: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get address
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataAddress: action.payload.data.data,
      };
    }
    // get address by id
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
        dataAddressById: action.payload.data.data,
      };
    }
    // make adress
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
        isMaked: true,
        isLoading: false,
        message: 'add address success',
      };
    }
    // update adress
    case 'UPDATE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
        message: 'pending',
      };
    }
    case 'UPDATE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'update address rejected',
      };
    }
    case 'UPDATE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isError: false,
        isUpdated: true,
        isLoading: false,
        message: 'update address success',
      };
    }
    default: {
      return state;
    }
  }
};

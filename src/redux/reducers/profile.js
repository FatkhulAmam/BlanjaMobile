const initialState = {
  result: [],
  isLoading: false,
  isError: false,
  isEdit: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get profile
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
    // edit profile
    case 'EDIT_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'cannot edit profile',
      };
    }
    case 'EDIT_PROFILE_FULFILLED': {
      return {
        ...state,
        isError: false,
        isEdit: true,
        isLoading: false,
        message: 'edit profile success',
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

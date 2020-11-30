const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'CATEGORY_DETAIL_PENDING': {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'CATEGORY_DETAIL_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'CATEGORY_DETAIL_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data
        }
      }
      default: {
        return state
      }
    }
  }
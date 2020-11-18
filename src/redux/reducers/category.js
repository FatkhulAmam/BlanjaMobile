const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_CATEGORY_REJECTED' : {
      return{
        ...state,
        isLoading: false,
        isError: true,
        message: 'Cannot Get Category'
      }
    }
    case 'GET_CATEGORY_FULFILLED' : {
      return{
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        message: 'list category'
      }
    }
    default:{
        return state
    }
  }
}
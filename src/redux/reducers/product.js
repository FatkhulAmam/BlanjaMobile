const initialState = {
  allData: [],
  dataCategory: [],
  dataSearch: [],
  dataDetail: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get all product
    case 'GET_DATA_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DATA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_DATA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        allData: action.payload.data.data,
      };
    }
    // get product by category
    case 'CATEGORY_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CATEGORY_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'CATEGORY_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataCategory: action.payload.data.data,
      };
    }
    // search product
    case 'GET_SEARCH_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_SEARCH_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_SEARCH_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataSearch: action.payload.data.data,
      };
    }
    // detail product
    case 'GET_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: 'There is an error at request data',
      };
    }
    case 'GET_DETAIL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataDetail: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
    isRegister: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PROFILE_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'EDIT_PROFILE_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot edit profile'
            }
        }
        case 'EDIT_PROFILE_FULFILLED':{
            return{
                ...state,
                isError: false,
                isRegister: true,
                isLoading:false,
                message: 'edit profile success'
            }
        }
        default:{
            return state
        }
    }
}
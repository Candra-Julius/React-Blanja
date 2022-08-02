const initialState = {
    user: {
        fullname: '',
        email: '',
        role: '',
        password: ''
    },
    isLoading:false
}

export const userReducer = (state = initialState, action) => {
    if(action.type === 'USER_LOGIN_PENDDING'){
        return{
            ...state,
            isLoading: true
        }
    }else if(action.type === 'USER_LOGIN_SUCCESS'){
        return{
            ...state,
            user: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
}

export const registerReducer = (state = initialState, action) => {
    if(action.type === 'REGISTER_PENDING'){
        return{
            ...state,
            isLoading: true
        }
    }else if(action.type === 'REGISTER_SUCCESS'){
        return{
            ...state,
            user: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
}
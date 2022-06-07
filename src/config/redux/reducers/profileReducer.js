const initialState = {
    profile: {
        fullname: "",
        email: "",
        phone: "",
        gender: "",
        id: ""
    },
    isLoading: false
}
const profileReducer = (state = initialState, action) =>{
    if(action.type === 'UPDATE_PROFILE_PENDING'){
        return{
            ...state,
            isLoading: true
        }
    }else if(action.type === 'UPDATE_PROFILE_SUCCESS'){
        return{
            ...state,
            profile: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
}

export default profileReducer
const initialState = {
    product: {
        name: "",
        stock: "",
        photo: "",
        price: "",
        status: "",
        desc: ""
    },
    isLoading:false
}

const sellingReducer = (state = initialState, action) => {
    if(action.type === 'USER_SELLING_PENDDING'){
        return{
            ...state,
            isLoading: true
        }
    }else if(action.type ==='USER_SELLING_SUCCESS'){
        return{
            ...state,
            product: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
}

export default sellingReducer
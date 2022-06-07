const initialState = {
    category:[],
    product:[],
    isLoading:false
}

const homeReducer = {
homeProductReducer: (state = initialState, action) => {
    if(action.type === 'PRODUCT_LOADING_HOME'){
        return {
            ...state,
            isLoading: true
        }
    }else if (action.type === 'PRODUCT_HOME_LOADED') {
        return {
            ...state,
            product: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
},
homeCategoryReducer: (state = initialState, action) => {
    if(action.type === 'CATEGORY_LOADING_HOME'){
        return {
            ...state,
            isLoading: true
        }
    }else if (action.type === 'CATEGORY_HOME_LOADED') {
        return {
            ...state,
            category: action.payload,
            isLoading: false
        }
    }else{
        return state
    }
    }
}

export default homeReducer
// import axios from "axios";
import axios from "../../axios";

const homeAct = {
    productHome: () => async (dispacth) => {
        try {
            // dispacth({type:'PRODUCT_LOADING_HOME'})
            const result = await axios({
                method:'GET',
                url: '/product'
            })
            const product = result.data.data
            // console.log(product);
            dispacth({type: 'PRODUCT_HOME_LOADED',payload:product})
        } catch (error) {
            console.log(error);
        }
        
    },
    categoryHome: () => async (dispacth) => {
        try {
            // dispacth({type: 'CATEGORY_LOADING_HOME'})
            const result = await axios({
                method: 'GET',
                url: '/category'
            })
            const category = result.data.data
            // console.log(category);
            dispacth({type: 'CATEGORY_HOME_LOADED', payload:category})
        } catch (error) {
            console.log(error);
        }
    }
}

export default homeAct
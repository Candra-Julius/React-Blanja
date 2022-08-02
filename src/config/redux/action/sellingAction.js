// import axios from "axios";
import axios from "../../axios";

export const selling = (dataForm) => async(dispacth)=>{
    try {
        dispacth({type: 'USER_SELLING_PENDDING'})
        const result = await axios({
        method: 'POST',
        url:'/product', 
        data: dataForm
    })
        const product = result.data.data
        console.log(product);
        dispacth({type: 'USER_SELLING_SUCCESS', payload:product})
    } catch (error){
        console.log(error);
    }
}
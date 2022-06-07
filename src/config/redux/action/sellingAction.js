import axios from "axios";

export const selling = (dataForm) => async(dispacth)=>{
    try {
        dispacth({type: 'USER_SELLING_PENDDING'})
        const result = await axios.post('http://localhost:4000/v1/product', dataForm)
        const product = result.data.data
        console.log(product);
        dispacth({type: 'USER_SELLING_SUCCESS', payload:product})
    } catch (error){
        console.log(error);
    }
}
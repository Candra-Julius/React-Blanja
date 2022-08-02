// import axios from "axios"
import axios from "../../axios";

export const loginUser =(dataForm, navigate)=>async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios({
            method: 'POST',
            url:'/users/login', 
            data:dataForm
    })
        const user = result.data
        console.log(user);
        localStorage.setItem('token', user.data.token)
        localStorage.setItem('refreshToken', user.data.refreshToken)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload:user})
    navigate('/')
    } catch (error) {
        console.log(error);
    }
}
export const register = (dataForm, navigate) => async(dispatch)=>{
    try {
        dispatch({type: 'REGISTER_PENDING'})
        const result = await axios({
            method: 'POST',
            url: '/users/register',
            data: dataForm
        })
        const user = result.data
        console.log(user);
        dispatch({type: 'REGISTER_SUCCESS', payload:user})
        navigate('/login')
        
    } catch (error) {
        console.log(error);
    }
}
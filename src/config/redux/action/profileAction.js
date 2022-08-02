import axios from "../../axios"
// import axios from "../../axios"

export const profile = (dataForm) => async(dispatch)=>{
    try {
        dispatch({type: 'UPDATE_PROFILE_PENDING'})
        const result = await axios({
            method:'PUT',
            url: '/users/profile/edit',
            data: dataForm,
        })
        // const res = await axios.put('http://localhost:4000/v1/users/profile/edit', dataForm)
        const edit = result.data.data
        console.log(edit);
        dispatch({type: 'UPDATE_PROFILE_SUCCESS', payload:edit})
    } catch (error) {
        console.log(error);
    }
}

export const getProfile = () => async(dispatch)=>{
    try {
        dispatch({type: 'GET_PROFILE_PENDING'})
        const result = await axios({
            method: 'GET',
            url: '/users/profile'
        })
        const data = result.data
        console.log(data);
        dispatch({type: 'GET_PROFILE_SUCCESS'})
    } catch (error) {
        console.log(error);
    }
}
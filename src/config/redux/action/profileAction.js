import axios from "../../axios"

const profile = (dataForm) => async(dispatch)=>{
    try {
        const varToken = localStorage.getItem('token')
        dispatch({type: 'UPDATE_PROFILE_PENDING'})
        const result = await axios({
            method:'PUT',
            url: '/users/profile/edit',
            data: dataForm,
            headers: {
                Authorization: "Bearer " + varToken
            }
        })
        // const res = await axios.put('http://localhost:4000/v1/users/profile/edit', dataForm)
        const edit = result.data.data
        console.log(edit);
        dispatch({type: 'UPDATE_PROFILE_SUCCESS', payload:edit})
    } catch (error) {
        console.log(error);
    }
}

export default profile
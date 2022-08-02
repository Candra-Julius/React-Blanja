import axios from "axios";

const varToken = localStorage.getItem('token')
const axiosApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND,
    headers: {
        Authorization: "Bearer " + varToken
    }
})

export default axiosApiInstance
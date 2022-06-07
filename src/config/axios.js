import axios from "axios";

const axiosApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND
})

export default axiosApiInstance
import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

const pathAuth ={
    RequireAuth: ({children}) => {
    const isLogin = localStorage.getItem('token')
    if (!isLogin){
        return(
            <Navigate to="/login" replace />
        )
    }
    return children
},
    loggedIn: ({children}) => {
        const isLogin = localStorage.getItem('token')
        if (isLogin){
            return(
                <Navigate to="/" replace />
            )
        }
        return children
    },
}


export default pathAuth
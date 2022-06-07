import React from 'react'
import Button from '../../component/button'
import style from './style.module.css'
import {useNavigate} from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
    <h1>Page Not Found</h1>
    <p> Back to <Button title={'Home'} onClick={()=>navigate('/')}/> </p>
    </div>
  )
}

export default Page404
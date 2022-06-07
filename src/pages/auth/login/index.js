import React, { useState } from "react";
import style from "./style.module.css";
import logo  from "../img/Vector.png";
import {useDispatch} from 'react-redux'
import {loginUser} from  '../../../config/redux/action/userAction' 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
    role: ''
  })
  const handlechange =(e)=>{
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }
  const handlelogin = (e)=> {
    e.preventDefault();
    dispatch(loginUser(formLogin, navigate))
  }

  return (
    <div className={style.container}>
        
    <div className={style.logo}>
        <img src={logo} alt="logo"/>
        <span>Blanja</span>
    </div>
    <p><strong>Please sign up with your account</strong></p>
    <div className={style.role}>
    <button className={style.custbut} type="button" value='customer' onClick={(e) => formLogin(e.target.value)}>Customer</button>
    <button className={style.sellbut} type="button" value='admin' onClick={(e) => formLogin(e.target.value)}>Seller</button>
    </div>
      <form onSubmit={handlelogin}>
        <ul>
          <li>
            <input
              type="email"
              name="email"
              value={formLogin.email}
              placeholder="email"
              onChange={handlechange}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              value={formLogin.password}
              placeholder="password"
              onChange={handlechange}
            />
          </li>
        </ul>
        <button type="submit" className={style.button}>Primary</button>
      </form>
      <p>Don't have a Tokopedia account? <a href="../Register">Register</a></p>
    </div>
  );
};

export default Login;

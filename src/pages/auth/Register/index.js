import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../img/Vector.png"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("")
  const navigate = useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      fullname,
      role,
    };
    console.log(data);
    axios
      .post("http://localhost:4000/v1/users/register", data)
      .then((res) => {
        alert('un berhasil dibuat, silakan cek email anda')
      navigate('/login')
      })
      .catch((e) => {
        console.log(e);
        alert("Registrasi gagal");
      });
  };
  return (
    <div className={style.container}>
        
    <div className={style.logo}>
        <img src={logo} alt="logo"/>
        <span>Blanja</span>
    </div>
    <p><strong>Please sign up with your account</strong></p>
    <div className={style.role}>
    <button className={style.custbut} type="button" value='customer' onClick={(e) => setRole(e.target.value)}>Customer</button>
    <button className={style.sellbut} type="button" value='admin' onClick={(e) => setRole(e.target.value)}>Seller</button>
    </div>
      <form onSubmit={handleRegister}>
        <ul>
          <li>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="fullname"
              value={fullname}
              placeholder="fullname"
              onChange={(e) => setFullname(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit" className={style.button}>Primary</button>
      </form>
      <p>Already have a Tokopedia account? <a href='../login'>Login</a></p>
    </div>
  );
};

export default Register;

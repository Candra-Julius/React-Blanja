import React, { useEffect, useState } from "react";
import style from "./profile.module.css";
import dummyImg from "../sellingProduct/img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png";
import editProfile from "../sellingProduct/img/pencil-327.png";
import InputR from "../../component/input(row)";
import Button from "../../component/button";
import { useDispatch } from "react-redux";
import axiosApiInstance from "../../config/axios";
import {profile} from "../../config/redux/action/profileAction";
import NavBar from "../../component/navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const dispacth = useDispatch()
    const navigate = useNavigate()
    const [formProfile, setFormProfile] = useState({
        fullname: "",
        email: "",
        phone: "",
        gender: ""
    })
    const [userProfile, setUserProfile] = useState([])
    async function fetchData(){
      try {
        const result = await axiosApiInstance({
          method: 'GET',
          url: '/users/profile'
        })
        setUserProfile(result.data.data)
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
    fetchData()
    }, [])
    console.log(userProfile);
    const handleChange = (e) => {
        setFormProfile({
          ...formProfile,
          [e.target.name]: e.target.value,
        });
      };
    const handleProfile = (e) => {
        e.preventDefault()
        dispacth(profile(formProfile))
        alert('profile berhasil di update')
    }
    const genderCheck = document.getElementsByClassName('gender')
    console.log(genderCheck)
  return (
    <div>
    <NavBar/>
    <div className={style.container}>
      <div className={style.sect1}>
        <div className={style.profile}>
        <div className={style.profileHeader}>
          <img src={dummyImg} alt="dummyImg" className={style.profileImg} />
          <div className={style.textProfile}>
            
            <p>
              <strong>{userProfile.fullname}</strong>
            </p>
            
            <img src={editProfile} alt="ubahprofile" />
            <span>Ubah Profile</span>
          </div>
          </div>
            <div className={style.profileNav}>
                <div className={style.editProfile}><p>Profile</p></div>
                {userProfile.role==='admin'&& <div className={style.productList} onClick={()=>navigate('/productlist')}><p>Product List</p></div>}
                {userProfile.role==='admin'&& <div className={style.productList} onClick={()=>navigate('/selling')}><p>Selling Product</p></div>}
            </div>
          </div>
      </div>
      <div className={style.sect2}>
        <div className={style.subSect}>
          <h2>MyProfile</h2>
          <p>Manage your profile information</p>
          <div className={style.line} />
          <div className={style.form}>
          <form onSubmit={handleProfile}>
            <div className={style.inputForm}>
              <div className={style.input}>
                <InputR
                value={formProfile.fullname}
                name="fullname"
                label={"name"}
                type={"input"}
                onChange={handleChange}
                placeholder={userProfile.fullname}
                />
              </div>
              <div className={style.input}>
                <InputR
                  value={formProfile.email}
                  name={"email"}
                  label={"Email"}
                  type={"email"}
                  onChange={handleChange}
                  placeholder={userProfile.email}
                />
              </div>
              <div className={style.input}>
                <InputR
                  value={formProfile.phone}
                  name={"phone"}
                  label={"Phone Number"}
                  type={"number"}
                  onChange={handleChange}
                  placeholder={userProfile.phone}
                />
              </div>
              <div className={style.genderRadio}>
              <legend className={style.legend}>Gender</legend>
              <div className={style.gender}>
                <label className={style.radio}>
                  <input name="gender" type="radio" value='Laki-Laki' className='gender' onChange={handleChange} /> Laki-Laki
                </label>
                <label className={style.radio}>
                  <input name="gender" type="radio" value='Perempuan' className='gender' onChange={handleChange} /> Perempuan
                </label>
              </div>
            </div>
            <div className={style.date}>
            <InputR
            value={formProfile.date}
            name={'date'}
            label={"Birth of Date"}
            type={"date"}
            onChange={handleChange}
            />
            </div>
            <div className={style.button}>
            <Button type={'submit'} title={'save'} />
            </div>
            </div>
            </form>
            <div className={style.lineV}/>
            <div className={style.ava}>
            <div className={style.upload}>
            <img alt="avatar" src={dummyImg}/>
            <label htmlFor="upload-photo">Select image</label>
            <input
                className={style.uploadPhoto}
                name="photo"
                // value=''
                id="upload-photo"
                type="file"
                accept=".jpeg, .jpg, .png"
                // onChange=''
              />
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

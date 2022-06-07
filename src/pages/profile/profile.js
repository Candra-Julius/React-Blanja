import React, { useState } from "react";
import style from "./profile.module.css";
import dummyImg from "../sellingProduct/img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png";
import editProfile from "../sellingProduct/img/pencil-327.png";
import InputR from "../../component/input(row)";
import Button from "../../component/button";
import { useDispatch } from "react-redux";
import profile from "../../config/redux/action/profileAction";

const Profile = () => {
    const dispacth = useDispatch()
    const [formProfile, setFormProfile] = useState({
        fullname: "",
        email: "",
        phone: "",
        gender: ""
    })
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
  return (
    <div className={style.container}>
      <div className={style.sect1}>
        <div className={style.profile}>
          <img src={dummyImg} alt="dummyImg" className={style.profileImg} />
          <div className={style.textProfile}>
            <p>
              <strong>Johanes Mikael</strong>
            </p>
            <img src={editProfile} alt="ubahprofile" />
            <span>Ubah Profile</span>
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
                />
              </div>
              <div className={style.input}>
                <InputR
                  value={formProfile.email}
                  name={"email"}
                  label={"Email"}
                  type={"email"}
                  onChange={handleChange}
                />
              </div>
              <div className={style.input}>
                <InputR
                  value={formProfile.phone}
                  name={"phone"}
                  label={"Phone Number"}
                  type={"number"}
                  onChange={handleChange}
                />
              </div>
              <div className={style.genderRadio}>
              <legend className={style.legend}>Gender</legend>
              <div className={style.gender}>
                <label className={style.radio}>
                  <input name="gender" type="radio" value='Laki-Laki' onChange={handleChange} /> Laki-Laki
                </label>
                <label className={style.radio}>
                  <input name="gender" type="radio" value='Perempuan' onChange={handleChange} /> Perempuan
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
  );
};

export default Profile;

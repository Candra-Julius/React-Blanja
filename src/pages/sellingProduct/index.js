import React, { useState } from "react";
import style from "./selling.module.css";
import dummyImg from "./img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png";
import editProfile from "./img/pencil-327.png";
import Input from "../../component/input";
import Button from "../../component/button";
import { useDispatch } from "react-redux";
import { selling } from "../../config/redux/action/sellingAction";

const SellingProd = () => {
    const dispacth = useDispatch()
  const [formProduct, setFormProduct] = useState({
    name: "",
    stock: "",
    photo: "",
    price: "",
    status: "",
    desc:""
  });
  const handleChange = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleProduct = (e) => {
    e.preventDefault();
    dispacth(selling(formProduct))
  };

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
        <form onSubmit={handleProduct}>
          <div className={style.subSect}>
            <p>Inventory</p>
            <div className={style.line} />
            <div className={style.input}>
              <Input value={formProduct.name} name='name' label={"Name of goods"} type={"input"} onChange={handleChange} />
            </div>
          </div>
          <div className={style.subSect}>
            <p>Item details</p>
            <div className={style.line} />
            <div className={style.input}>
              <Input value={formProduct.price} name='price' label={"Unit price"} type={"number"} min={"0"} onChange={handleChange} />
            </div>
            <div className={style.input}>
              <Input value={formProduct.stock} name='stock' label={"Stock"} type={"number"} min={"1"} onChange={handleChange} />
            </div>
            <div>
              <legend className={style.legend}>Stock</legend>
              <div className={style.stock}>
                <label className={style.radio}>
                  <input name="status" type="radio" value='baru' onChange={handleChange} /> Baru
                </label>
                <label className={style.radio}>
                  <input name="status" type="radio" value='bekas' onChange={handleChange} /> Bekas
                </label>
              </div>
            </div>
          </div>
          <div className={style.subSect}>
            <p>Photo of goods</p>
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.upload}>
              <label htmlFor="upload-photo">Upload Photo</label>
              <input
                className={style.uploadPhoto}
                name="photo"
                value={formProduct.photo}
                id="upload-photo"
                type="file"
                accept=".jpeg, .jpg, .png"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.subSect}>
            <p>Description</p>
            <div className={style.line} />
            <textarea name="desc" value={formProduct.desc} className={style.desc} onChange={handleChange} />
          </div>
          <div className={style.submit}>
            <Button type={'submit'} title={"submit"} className={style.submitButt} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellingProd;

import React, { useEffect, useState } from "react";
import style from "./selling.module.css";
import dummyImg from "./img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png";
import editProfile from "./img/pencil-327.png";
import Input from "../../component/input";
import Button from "../../component/button";
// import { useDispatch } from "react-redux";
// import { selling } from "../../config/redux/action/sellingAction";
import NavBar from "../../component/navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../../config/axios'

const EditProduct = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  // const dispacth = useDispatch()
  const [initial, setInitial] = useState('')
  const [photo, setPhoto] = useState([])
  const [formProduct, setFormProduct] = useState({
    name: "",
    stock: "",
    photo: "",
    price: "",
    status: "",
    desc:""
  });
  const [userProfile, setUserProfile] = useState([])
    async function fetchData(){
      try {
        const result = await axios({
          method: 'GET',
          url: '/users/profile'
        })
        setUserProfile(result.data.data)
        console.log(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function postData(dataForm) {
      try {
        await axios({
          method: 'PUT',
          url:`/product/${id}`, 
          data: dataForm
        })
      } catch (error) {
        console.log(error);
      }
    }

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
  }
  async function initialData(){
    try {
      const result = await axios({
        method: 'GET',
        url: `/product/${id}`
      })
      console.log(result.data.result);
      setInitial(result.data.result)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
    initialData()
    }, [])
  const handleChange = (e) => {
    setFormProduct({
      ...formProduct,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(()=>{
    console.log(formProduct);
    console.log(photo);
    console.log(initial.name);
  },[photo, formProduct, initial])
  const handleProduct = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', formProduct.name)
    formData.append('price', formProduct.price)
    formData.append('status', formProduct.status)
    formData.append('stock', formProduct.stock)
    formData.append('desc', formProduct.desc)
    formData.append('photo', photo)
    console.log(photo);
    // console.log(formData.getAll)
    postData(formData)
    alert('barang berhasil dijual')
    navigate('/')
  };

  return (
    <div>
    <NavBar/>
    <div className={style.container}>
      <div className={style.sect1}>
        <div className={style.profile}>
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
                <div className={style.editProfile} onClick={()=>navigate('/profile')}><p>Profile</p></div>
                <div className={style.editProfile} onClick={()=>navigate('/productlist')}><p>Product List</p></div>
                <div className={style.productList}><p>Selling Product</p></div>
            </div>
      </div>
      <div className={style.sect2}>
        <form onSubmit={handleProduct}>
          <div className={style.subSect}>
            <p>Inventory</p>
            <div className={style.line} />
            <div className={style.input}>
              <Input value={formProduct.name} name='name' label={"Name of goods"} type={"input"} onChange={handleChange} placeholder={initial.name} />
            </div>
          </div>
          <div className={style.subSect}>
            <p>Item details</p>
            <div className={style.line} />
            <div className={style.input}>
              <Input value={formProduct.price} name='price' label={"Unit price"} type={"number"} min={"0"} onChange={handleChange} placeholder={initial.price} />
            </div>
            <div className={style.input}>
              <Input value={formProduct.stock} name='stock' label={"Stock"} type={"number"} min={"1"} onChange={handleChange} placeholder={initial.stock
              }/>
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
                value={''}
                id="upload-photo"
                type="file"
                accept=".jpeg, .jpg, .png"
                onChange={(e) => handlePhoto(e)}
              />
            </div>
          </div>
          <div className={style.subSect}>
            <p>Description</p>
            <div className={style.line} />
            <textarea name="desc" value={formProduct.desc} className={style.desc} onChange={handleChange} placeholder={initial.description}/>
          </div>
          <div className={style.submit}>
            <Button type={'submit'} title={"submit"} className={style.submitButt} />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditProduct;

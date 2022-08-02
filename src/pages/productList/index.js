import React, { useEffect, useState } from 'react'
import NavBar from '../../component/navbar'
import style from './styles.module.css'
import dummyImg from "../sellingProduct/img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png";
import editProfile from "../sellingProduct/img/pencil-327.png";
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux';
import homeAct from '../../config/redux/action/homeAction';
import dummy from '../home/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const ProductList = () => {
    // const test = [{no:1}, {no:2},{no:3},{no:4},{no:5},{no:6}]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {product} = useSelector((state)=>state.product)
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
    useEffect (()=>{
      dispatch(homeAct.productHome(product))
      console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() => {
    fetchData()
    }, [])
    const handleDelete = async(id) =>{
      try {
        await axios.delete(`${process.env.REACT_APP_API_BACKEND}/product/${id}`)
        fetchData()
        alert('item has been deleted')
      } catch (error) {
        console.log(error);
      }
    }
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
                <div className={style.productList}><p>Product List</p></div>
                <div className={style.editProfile} onClick={()=>navigate('/selling')}><p>Selling Product</p></div>
            </div>    
      </div>
      <div className={style.sect2}>
        <h2>Product List</h2>
        <div className={style.sub1Sect2}>
            {product.map((item)=>(
                <div className={style.card}>
                <div className={style.descBox}>
                  <div className={style.imageDiv}><img src={item.photo? item.photo: dummy} alt='dummy'></img></div>
                  <div className={style.desc}>
                    <p>{item.name}</p>
                    <p>{item.status}</p>
                  </div>
                </div>
                <div className={style.button}>
                <div className={`${style.edit} ${style.butt}`} onClick={()=>navigate(`/editproduct/${item.product_id}`)}><p>Edit</p></div>
                <div className={`${style.delete} ${style.butt}`} onClick={()=> handleDelete(item.product_id)}><p>Delete</p></div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductList
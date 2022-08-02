import React, { useEffect } from 'react'
import style from './style.module.css'
import dummy from './img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import { useDispatch } from 'react-redux'
import homeAct from '../../config/redux/action/homeAction'
import { useSelector } from 'react-redux'
import axiosApiInstance from '../../config/axios'
import NavBar from '../../component/navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const dispacth = useDispatch()
  const {category} = useSelector((state)=> state.category)
  const {product} = useSelector((state)=>state.product)

  useEffect (()=>{
    dispacth(homeAct.categoryHome(category))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    useEffect (()=>{
    dispacth(homeAct.productHome(product))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  async function addToCart(id){
    try {
      const token = localStorage.getItem('token')
      await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_BACKEND}/purchase/addtocart/${id}`,
        headers:{
          Authorization: 'Bearer ' + token
        }
      })
    // dispacth(homeAct.productHome(product))
    alert('item added')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <NavBar/>
    
    <div className={style.container}>
    <div className={style.indexCard}>
    {category.map((item)=>(
      <div className={style.categoryCard}>
      <div className={style.cardBody}>
      <div className={style.text}>  
        {item.name}
      </div>
      </div>
    </div>
    ))}
    </div>
    <div className={style.indexCard}>
    {product.map((item)=>(
      <div className={style.card}>
      <Link to={`/product/${item.product_id}`}>
      <div className={style.imagesDiv}>
        <img src={item.photo? item.photo : dummy } alt='dummy'/>
      </div>
      <div className={style.cardBody}>
        <div className={style.text}>  
          {item.name}
        </div>
        <div>
          <p>RP.{item.price}</p>
        </div>
        </div>
        </Link>
        {localStorage.getItem('token') && <div className={style.option}>
        <div className={style.addToCart} onClick={()=>addToCart(item.product_id)} ><p>add</p></div>
        </div>
      }
    </div>
    ))}
    </div>
    </div>
    </div>
  )
}

export default Home
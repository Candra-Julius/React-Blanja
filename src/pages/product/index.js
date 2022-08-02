import React from 'react'
import Button from '../../component/button'
import NavBar from '../../component/navbar'
import style from './product.module.css'
import dummy from '../home/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../config/axios'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import homeAct from '../../config/redux/action/homeAction'

const Product = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [prodDetail, setProdDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {product} = useSelector((state)=>state.product)
  const col1 = '#1A1A1A'
  const col2 = '#D84242'
  const col3 = '#4290D8'
  const col4 = '#42D86C'

  useEffect (()=>{
    dispatch(homeAct.productHome(product))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const fetchData = async ()=>{
    try {
      setIsLoading(true)
      const result = await axios({
        method:'GET',
        url: `/product/${id}`
      })
      const datas = result.data.result
      setProdDetail(datas)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      console.log('error in here');
    }
  }
  useEffect(()=>{
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  const addToCart = async(id)=>{
    try {
      await axios({
      method: 'POST',
      url: `/purchase/${id}`
    })
    dispatch(homeAct.productHome(product))
    alert('item added')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.container}>
    {!isLoading?
      <>
    <NavBar/>
    <div className={style.wrapper}>
      <div className={style.sect1}>
        <div className={style.sub1Sect1}>
        <img alt='dummy' src={prodDetail.photo? prodDetail.photo : dummy} />
        </div>
        <div className={style.sub2Sect1}>
          <div className={style.title}>
            <h2>{prodDetail.name&& prodDetail.name}</h2>
          </div>
          <div className={style.price}>
            <p>Price</p>
            <p>Rp. {prodDetail.price&& prodDetail.price }</p>
          </div>
          <div className={style.radioBox}>
            <h3>Color</h3>
            <div className={style.radBox}>
              <input className={style.radio} style={{'accent-color': col1}} type={'radio'} name={'color'} ></input>
              <input className={style.radio} style={{'accent-color': col2}} type={'radio'} name={'color'} ></input>
              <input className={style.radio} style={{'accent-color': col3}} type={'radio'} name={'color'} ></input>
              <input className={style.radio} style={{'accent-color': col4}} type={'radio'} name={'color'} ></input>
            </div>
            </div>
          <Button title={'Buy Now'}/>
        </div>
      </div>
      <div className={style.sect2}>
      <h4>Informasi Product</h4>
      <p className={style.conTitle}>Condition</p>
      <p className={style.condition}>{prodDetail.status&& prodDetail.status }</p>
      <div className={style.desc}>
      <h5>Description</h5>
      <p>{prodDetail.description}</p>
      </div>
      <h4>You can also like this</h4>
        <div className={style.indexCard}>
        {product.map((item)=>(
          <div className={style.card}>
          <Link to={`/product/${item.product_id}`}>
          <div className={style.imagesDiv}>
            <img src={item.photo? item.photo : dummy } alt='project pict'/>
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
      </>
      :
        <h1 className={style.loading}>LOADING . . .</h1>
    }
    </div>
  )
}

export default Product
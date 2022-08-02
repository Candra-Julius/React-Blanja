import React, { useEffect, useState } from "react";
// import InputR from '../../component/input(row)'
import style from "./mybag.module.css";
import dummyImg from "../home/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png";
import axiosApiInstance from "../../config/axios";
import { Link } from "react-router-dom";
import NavBar from "../../component/navbar";

const MyBag = () => {
  const [items, setItems] = useState([]);
  async function fetchData(){
    try {
      const result = await axiosApiInstance({
        method: 'GET',
        url: '/purchase' 
      })
      setItems(result.data.rows)
      // console.log(result.data.rows);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
fetchData()
  },[])

  const handleIncrement = async(id) =>{
    try {
      await axiosApiInstance({
      method: 'POST',
      url: `/purchase/addtocart/${id}`
    })
    fetchData()
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecrement = async(id)=>{
    try {
      await axiosApiInstance({
      method: 'PUT',
      url: `/purchase/${id}`
    })
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };
  const total = items.map((item)=>item.qty * item.price)
  const totalPrice = () =>{
    if (!total.length){
      return 0
    }else{
      return total.reduce((acc,value)=>{
    return acc + value
  }) 
    }
    
  }  
  console.log(totalPrice());

  return (
    <div>
    <NavBar/>
    <div className={style.container}>
      <div className={style.sect1}>
        <h1>MyBag</h1>
        <div className={style.cardBox}>
        {items &&  items.map((item)=>(
          <div className={style.card}>
            <div className={style.items}>
              <label htmlFor="items">
                <img src={item.photo? item.photo : dummyImg} alt="dummyImg" />
                <p>{item.name}</p>
              </label>
            </div>
            <div className={style.wraper}>
              <button onClick={()=>handleDecrement(item.product)}>-</button>
              <p>{item.qty}</p>
              <button onClick={()=>handleIncrement(item.product)}>+</button>
              <p className={style.price}>{`RP.${item.qty * item.price}`}</p>
              </div>
          </div>
        ))}
          
        </div>
      </div>
      <div className={style.sect2}>
      <div className={style.subSect2}>
      <div>
      <p><strong>Shoping Summary</strong></p>
      </div>
      <div className={style.total}>
      <p>Total price</p>
      <p><strong>{`RP.${totalPrice()}`}</strong></p>
      </div>
      <div className={style.buy}><Link to="/checkout"><p>Buy</p></Link></div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MyBag;

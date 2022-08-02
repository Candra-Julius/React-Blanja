import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import dummyImg from "../home/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png";
import axiosApiInstance from "../../config/axios";
import NavBar from "../../component/navbar";

const CheckOut = () => {
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
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
    <NavBar/>
<main >
<div className={style.Mcontainer}>
    <header>
        <h1>Checkout</h1>
    </header>
    <div className={style.main_sect}>
        <div className={style.sect1}>
            <div className={style.items_list}>
            {items &&  items.map((item)=>(
              <div className={style.card}>
                <div className={style.items}>
                  <label htmlFor="items">
                    <img src={item.photo? item.photo : dummyImg} alt="dummyImg" />
                    <p>{item.name}</p>
                  </label>
                </div>
                <div className={style.itemPrice}>
                  <p>{`RP.${item.qty * item.price}`}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
        <div className={style.sect2}>
        <div className={style.summary}>
            <p><strong>Shopping summary</strong></p>
        </div>
        <div className={style.delivery}>
            <div>
                <p>Order</p>
                <p>Delivery</p>
            </div>
            <div>
                <p><strong>RP.{totalPrice()}</strong></p>
                <p><strong>RP. 10000</strong></p>
            </div>
        </div>
        <div className={style.line}></div>
        <div className={style.payment}>
            <div>
                <p><strong>Shopping summary</strong></p>
                <p className={style.total}><strong>RP.{totalPrice() + 10000}</strong></p>
            </div>
            <button type="button">Select payment</button>
        </div>
    </div>
    </div>
</div>

</main>

</div>
  );
};

export default CheckOut;

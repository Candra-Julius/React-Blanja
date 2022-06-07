import React, { useState } from 'react'
import Button from '../../component/button'
import Input from '../../component/input'
import style from './product.module.css'

const Product = () => {
  const [product, setProduct] = useState("")
  const [products, setProducts] = useState([])
  const handleChange = (e =>{
    setProduct(e.target.value);
  })
  const handleSimpan =()=>{
    setProducts([
      ...products,
      product
    ])
    setProduct("")
  }

  return (
    <div>
    <div className={style.wraperInput}>
    <Input value={product} onChange={handleChange}/>
    <Button title="Simpan" onClick={handleSimpan}/>
    </div>
    <ul>
    {products.map((item)=>
      <li>{item}</li>
      )}  

    </ul>
    </div>
  )
}

export default Product
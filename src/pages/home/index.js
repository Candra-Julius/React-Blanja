import React, { useEffect } from 'react'
import style from './style.module.css'
import dummy from './img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'
import { useDispatch } from 'react-redux'
import homeAct from '../../config/redux/action/homeAction'
import { useSelector } from 'react-redux'

const Home = () => {
  // const [product, setProduct] = useState([])
  // const [category, setCategory] = useState([])
  const dispacth = useDispatch()
  const {category} = useSelector((state)=> state.category)
  const {product} = useSelector((state)=>state.product)

  useEffect (()=>{
    dispacth(homeAct.categoryHome(category))
  },[])

    useEffect (()=>{
    dispacth(homeAct.productHome(product))
  },[])
  return (
    <div className={style.container}>
    <div className={style.indexCard}>
    {category.map((item)=>(
      <div className={style.categoryCard}>
      <div class="card-body">
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
      <div>
        <img src={dummy} alt='dummy'/>
      </div>
      <div className={style.cardBody}>
        <div className={style.text}>  
          {item.name}
        </div>
        <div>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
    ))}
    </div>
    </div>
  )
}

export default Home
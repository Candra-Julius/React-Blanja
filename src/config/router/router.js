import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import NavBar from '../../component/navbar'
import Login from '../../pages/auth/login'
import Register from '../../pages/auth/Register'
import Home from '../../pages/home'
import Product from '../../pages/product'
import SellingProd from '../../pages/sellingProduct'
import Page404 from '../../pages/page404'
import MyBag from '../../pages/mybag/mybag'
import Profile from '../../pages/profile/profile'
import pathAuth from '../../component/Require/RequireAuth'
import ProductList from '../../pages/productList'
import EditProduct from '../../pages/EditProduct'
import CheckOut from '../../pages/store'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/register" element={<pathAuth.loggedIn><Register/></pathAuth.loggedIn>} />
      <Route path="/login" element={<pathAuth.loggedIn><Login/></pathAuth.loggedIn>} />
      <Route path="*" element={<Page404/>} />
      <Route path="/selling" element={<pathAuth.RequireAuth> <SellingProd/> </pathAuth.RequireAuth>} />
      <Route path="/mybag" element={<pathAuth.RequireAuth> <MyBag/> </pathAuth.RequireAuth>} />
      <Route path="/profile" element={<pathAuth.RequireAuth> <Profile/> </pathAuth.RequireAuth>} />
      <Route path="/productlist" element={<pathAuth.RequireAuth> <ProductList/> </pathAuth.RequireAuth>} />
      <Route path="/editproduct/:id" element={<pathAuth> <EditProduct/> </pathAuth>}/>
      <Route path="/checkout" element={<CheckOut/>} />
    </Routes>
</BrowserRouter>
  
  )
}

export default Router
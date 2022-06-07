import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../../component/navbar'
import Login from '../../pages/auth/login'
import Register from '../../pages/auth/Register'
import Home from '../../pages/home'
import Product from '../../pages/product'
import SellingProd from '../../pages/sellingProduct'
import Page404 from '../../pages/page404'
import MyBag from '../../pages/mybag/mybag'
import Profile from '../../pages/profile/profile'
import RequireAuth from '../../component/Require/RequireAuth'

const Router = () => {
  return (
    <BrowserRouter>
<NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product:id" element={<Product/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Page404/>} />
      <Route path="/selling" element={<RequireAuth> <SellingProd/> </RequireAuth>} />
      <Route path="/mybag" element={<RequireAuth> <MyBag/> </RequireAuth>} />
      <Route path="/profile" element={<RequireAuth> <Profile/> </RequireAuth>} />
    </Routes>
</BrowserRouter>
  
  )
}

export default Router
import React from 'react'
import style from './style.module.css'
import logo from './img/Vector.png'
import filter from './img/filter-6555 (2).png'
import { Link } from 'react-router-dom'
import cart from './img/shopping-cart-10942.png'
import notif from './img/notification-bell-13112.png'
import mail from './img/mail-142.png'
import profile from './img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png'
import MyBag from '../../pages/mybag/mybag'

const NavBar = () => {
  return (
    <nav>
        <ul className={style.sect1}>
            <li>
            <div className={style.logo}>
                <img src={logo} alt='logo'/>
                <span>Blanja</span>
            </div>
            </li>
            <li>
                <input type='search' placeholder='Search'/>
            </li>
            <li>
            <div className={style.filter}>
            <img src={filter} alt='filter'/>
            </div>
            </li>
        </ul>
        <ul className={style.sect2}>
            <li>
                <div className={style.nav2}>
                    <Link to='/mybag'>
                        <img src={cart} alt='cart' />
                    </Link>
                </div>
            </li>
            <li>
                <div className={style.nav2}>
                    <Link to='#'>
                        <img src={notif} alt='notif' />
                    </Link>
                </div>
            </li>
            <li>
                <div  className={style.nav2}>
                    <Link to='#'>
                        <img src={mail} alt='mail' />
                    </Link>
                </div>
            </li>
            <li>
                <div  className={style.nav2} id={style.prof}>
                    <Link to='/profile'>
                        <img src={profile} alt='profile' />
                    </Link>
                </div>
            </li>
        </ul>
        </nav>
  )
}

export default NavBar
import React from 'react'
import style from './style.module.css'
import logo from './img/Vector.png'
import filter from './img/filter-6555 (2).png'
import { Link, useNavigate } from 'react-router-dom'
import cart from './img/shopping-cart-10942.png'
import notif from './img/notification-bell-13112.png'
import mail from './img/mail-142.png'
import profile from './img/christian-buehner-DItYlc26zVI-unsplash 1 (1).png'

const NavBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        navigate('/login')
    }
  return (
    <nav>
        <ul className={style.sect1}>
            <li>
            <Link to="/" >
            <div className={style.logo}>
                
                <img src={logo} alt='logo'/>
                <span>Blanja</span>
            </div>
            </Link>
            </li>
            <li>
                <input type='search' placeholder='Search'/>
            </li>
        </ul>
        
        {localStorage.getItem('token') ? 
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
                <img src={profile} alt='profile' />
                <ul className={style.dropdown}>
                    <li>
                    <Link to='/profile' > <p> Profile </p></Link>
                    </li>
                    <li onClick={()=>handleLogout()}>
                    <Link to='#' ><p>LogOut</p></Link>
                    </li>
                </ul>
        </div>
    </li>
        </ul> :
        <ul className={style.sect2}>
        <li>
                <div className={style.nav2}>
                    <Link to='/mybag'>
                        <img src={cart} alt='cart' />
                    </Link>
                </div>
            </li>
            <li>
                <div className={style.logIn}>
                <Link to={'/login'}>
                <p>Login</p>
                </Link>
                </div>
            </li>
            <li>
            <div className={style.Register}>
            <Link to={'/register'}>
            <p>Register</p>
            </Link>
            </div>
            </li>
            </ul>
        }
        </nav>
  )
}

export default NavBar
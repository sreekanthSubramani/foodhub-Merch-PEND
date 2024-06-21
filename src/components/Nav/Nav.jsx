import './Nav.css'
import React from 'react'
import { assets } from '../../assets/assets'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {useState} from 'react'

const Nav = () => {

    const [currentSelection ,setCurrentSelection] = useState("menu")

  return (
    <div className='navBar'>
    <img src={assets.foodhubLogo} alt="foodhubLogo" className="logo"/>
    <ul className='navBar-menu'>
        <li onClick={()=>setCurrentSelection("home")}className={currentSelection === "home" ? "active" : "" }>Home</li>
        <li onClick={()=>setCurrentSelection("menu")}className={currentSelection === "menu" ? "active" : "" }>Menu</li>
        <li onClick={()=>setCurrentSelection("app")}className={currentSelection === "app" ? "active" : "" }>App</li>
        <li onClick={()=>setCurrentSelection("contactUs")}className={currentSelection === "contactUs" ? "active" : "" }>Contact Us</li>
    </ul>
    <div className="navbar-right">
        <FaSearch className='searchLogo' />
        <div className='navBar-searchIcon'>
        <FaShoppingCart className='cartLogo'/>
        <div className='dot'></div>
        </div>
        <button>Sign in</button>
        
    </div>
    <div>
        
    </div>
    </div>
  )
}

export default Nav
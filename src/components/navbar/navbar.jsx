import React, { useContext, useState } from "react";
import './navbar.css'
import logo from '../assert/logo.png'
import cart_icon from '../assert/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar =()=>{


    const [Menu,setMenu]= useState("shop")

    const {getTotalCartItems}=useContext(ShopContext)



return(
<div className="navbar">
    <div className="nav-log">
        <img src={logo} alt=" "></img>
        <p>SHOPPER</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none'}} to='/'>shop</Link>{Menu==='shop'?<hr/>:<></>}</li>
        
        <li onClick={()=>{setMenu("Mens")}}><Link to='/Men' style={{textDecoration:'none'}}>Men</Link>{Menu==='Mens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link to='/Women' style={{textDecoration:'none'}}> Women</Link>{Menu==='Womens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/Kids' style={{textDecoration:'none'}}>kids</Link>{Menu==='kids'?<hr/>:<></>}</li>
    </ul>
<div className="nav-cart">
    <Link to= '/Login'>  <button className="nav-cart-button">Login</button></Link>
    <Link to='/Cart'><img src={cart_icon} alt=""></img></Link>
    <div className="count-cart">{getTotalCartItems()}</div>
</div>
</div>
)
}
export default Navbar
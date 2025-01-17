import React from "react";
import './footer.css'
import footer_logo from '../assert/logo_big.png'
import instagram_icon from '../assert/instagram_icon.png'
import whatsapp_icon from '../assert/whatsapp_icon.png'
import pintestericon from '../assert/pintester_icon.png'
const Footer =()=>
{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>  Company  </li>
                <li>Product</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className="footer-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={pintestericon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>

            </div>
            <div className="footer-copyright">
                <hr/>
                <p>copyright @ 2024 -All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer
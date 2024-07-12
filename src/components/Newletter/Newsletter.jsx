import React from "react";
import './Newsletter.css'
const Newsletter =()=>
{
    return(
        <div className="news-letter">
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>Subscribe to our newletter and stay update </p>
            <div >
                <input type="email" placeholder="your email id"/>
                <button>Subscribe</button>                                                                                               

            </div>
        </div>
    )
}
export default Newsletter
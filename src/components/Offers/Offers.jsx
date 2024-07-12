import React from "react" 
import './Offers.css'
import exclusive_image  from '../assert/exclusive_image.png'
const Offers =()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>EXLUSIVE</h1>
                
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button >check now</button>

            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt=""/>
            </div>

        </div>
    )
}
export default Offers
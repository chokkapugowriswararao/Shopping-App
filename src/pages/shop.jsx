import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollection from "../components/newcollection/Newcollection";
import Newsletter from "../components/Newletter/Newsletter";
const Shop =()=>{
    return(
        <div>
        <Hero/>
        
        <Popular/>
        
        <Offers/>
        <Newcollection/>
        
        <Newsletter/>
     
        </div>
    )

    }
export default Shop
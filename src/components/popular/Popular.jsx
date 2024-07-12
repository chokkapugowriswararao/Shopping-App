import React from "react";
import './popular.css'
import  data_product from '../assert/data'
import Item from "../Item/Item";

const Popular =()=>{
    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr></hr>
            <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.o}/>
            })}
            </div>
            
            
        </div>
    )

}
export default Popular
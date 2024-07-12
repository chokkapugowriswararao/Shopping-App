import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../context/ShopContext";

import dropdown_icon from '../components/assert/dropdown_icon.png'
import all_product from "../components/assert/all_product";
import Item from "../components/Item/Item";

const ShopCategory =(props)=>{
    const {all_product} =useContext(ShopContext)
    return(
        <div className="shop-catagory">
            <img className="shopcategory-banner" src={props.banner} alt=" "/>
            <div className="shopcategory-indexsort">
                <p>
                <span>showing 1-12</span> out of 36 products
                </p>
               <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt=""/>
               </div>

            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null
                    }
                })}
            </div>
                <div className="shopcategory-loadmore">
                    Explore more
                </div>
           
        </div>
    )

}
export default ShopCategory
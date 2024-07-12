import React from "react";
import './Newcollection.css'
import new_collections from '../assert/new_collections'

import Item from "../Item/Item";
const Newcollection =()=>
{
    return(
        <div className="New-collection">
            <h1>NEW COLLECTION</h1>
            <hr/>
    
            <div className="collection_">

            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
      
        </div>
        </div>
    )
}
export default Newcollection
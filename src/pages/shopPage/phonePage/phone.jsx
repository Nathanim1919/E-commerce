import React ,{useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import PhoneItem from "../../../components/phone-item-component/phone-item";
import './phone.css';


const Phone = (props) =>{

    return (
      <>
      <Outlet/>
      <div className="banner" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(${props.itemInfo.img})`,
      }}>
        <div className="hero">
            <h1>{props.itemInfo.quote}</h1>
            <p>{props.itemInfo.speaker}</p>
        </div>
      </div>

      
      <div className="phone-container">
        {
          props.data.items.map((item) => (
              <PhoneItem
                key={item.id}
                item={item.item}
                imageUrl={item.imageUrl}
                price={item.price}
                year={item.year}
                i_discri = {item.i_discri}
                id = {item.id}
              />
            ))
       }
    </div>
    </>
    )
}
export default Phone;
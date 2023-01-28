import React from "react";
import { NavLink } from "react-router-dom";
import "./phone-item.css";
import { useEffect } from "react";
import Loading from "../loading.component/loading";
import DatailedPage from "../../pages/detailPage/detailPage";

const PhoneItem = (props) => {

  return (
    <div className="item">
       
       <div className="image">
           <NavLink onClick={()=>alert(`add to favorite ${props.id}`)} className='favorite'><i class="fa-solid fa-bookmark"></i></NavLink>
            <img alt="hey" src={`${props.imageUrl}`} />
        </div> 
      
      <div className="content">
         <div className="items-info">
            <h3>{props.item}</h3>
            <p>{props.i_discri}</p>
            <h4>{props.year}</h4>
         </div>

         <div className="carts">
           <NavLink onClick={()=>alert(props.id)}><i class="fa-solid fa-cart-shopping"></i></NavLink>
           <NavLink to={`${props.id}`}><i class="fa-solid fa-arrow-right"></i></NavLink>
          
         </div>
      </div>
    </div>
  );
};

export default PhoneItem;

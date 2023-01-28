import "./collection-item.css";
import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
const CollectionItem = (props) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let c = setInterval(() => {
      if (count > props.data.items.length) {
         clearInterval(c);
      }
      setCount(count++);
    }, 150);
  },[]);

  return (
    <div className="c-item">
      <img alt="hey" src={`${props.data.items[0].imageUrl}`} />
      <div className="co-content">
        <div className="item-left">
          <h1 className="left">
            {count}<sup>+</sup>
          </h1>
        </div>
        <div className="c-info">
          <div className="info">
            <h2>{props.data.name}</h2>
            <p>{props.data.item_discription}</p>
          </div>
          <NavLink to={`${props.data.url}`}>
            <i class="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default CollectionItem;

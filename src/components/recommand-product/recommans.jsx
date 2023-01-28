import React from 'react';
import './recommand.css';

const RecommandItem = (props) =>{
     console.log(props.data);

    return(
           <div className='pr-item'>
                <img src={props.data.imageUrl} alt="" />
                <h2>{props.data.item}</h2>
           </div> 
    )
}

export default RecommandItem;
import React from 'react';

function Item(props) {    
  return (
    <div className="col-md-4 relative">
        <div className="row">
        <div className="col-md-12">
            <img src={props.img} alt='location' className="mainImg"/>
        </div>
        <span className={props.durationClass}>{props.duration}</span>
        <img src={props.heart} alt='heart' className="heart"/>
        </div>
        <div className="row writeUpContainer">
        <div className="col-md-12 writeUp">
            {props.title}<br/> <small>{props.price}</small>
        </div>
        </div>
    </div> 
  );
}

export default Item;

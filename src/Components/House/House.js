import React from 'react';
import "../House/House.css"

function House(props){


    return(
        <div>
            <img src={props.house.img} alt="" />
            <div>Name: {props.house.name}</div>
            <div>Address: {props.house.address}</div>
            <div>City: {props.house.city}</div>
            <div>State: {props.house.state}</div>
            <div>Zip Code: {props.house.zip}</div>
            
            <button
            onClick={e => {props.deleteFn(props.house.id)}}
            >Delete Property</button>
        </div>
    )
};

export default House
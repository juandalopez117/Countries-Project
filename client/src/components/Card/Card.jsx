import React from "react";
import './Card.css'
import {Link } from "react-router-dom";




export default function Card({country, image, continent, id}){
    return (
        
        <div className='Card'>
            <img src={image} alt='image not founded'
            border='2px' radius='10px' className="Image"/>
           
            <Link to={`/countries/${id}`} className="line">
                <h3 > {country} </h3>
            </Link>
            <h3> {continent} </h3>
        </div>
       
    )
}
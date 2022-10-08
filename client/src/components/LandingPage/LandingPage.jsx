import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css'

export default function LandingPage(){
    return (
        <div  className="LandingPage">
            <div className="part">
                <h1> Henry Countries </h1>
                <h1> ¡ Welcome to Countries App !</h1>
                <Link to='/countries'>
                    <button className="btn"> Ingresar </button>    
                </Link>
            </div>
        </div>
    )
}
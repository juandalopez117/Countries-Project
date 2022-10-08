import React from "react";
import { Link } from "react-router-dom";
import * as S from './About.module.css'

export default function aboutComponent(){
    return (
        <div className={S.container}>
            
            <div className={S.Data}>
            <h1> About the project</h1>
                <p> 
                The present single page application was made as an individual project in bootcamp SoyHenry. This page gives general information about several countries as capital, c
                continent, flag and population. It allows a filtering with base to continent, and an activities filtering that can be made in one or more countries. This page was 
                made with the following technologies: 
                </p>

                
                <ul>
                    Frontend: 
                    <li> HTML </li>
                    <li> React-DOM </li>
                    <li> JavaScript </li>
                    <li> Redux </li>
                    Backend
                    <li> Express </li>
                    <li> Node </li>
                    <li> Sequelize </li>
                    <li> PostgreSQL </li>
                </ul>

                <p> For data collection it was used the following <a href='https://restcountries.com/v3/all'> API </a> </p>

                <div className={S.icon}>
                <img src='./World_icon.svg'></img>
            </div>

            </div>    

           
            
            <Link to='/countries'>
                    <button className={S.btn}> Back to home </button>    
            </Link>    

                
            </div>
    )
}
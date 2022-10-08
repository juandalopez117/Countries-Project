import React from "react"
import { useParams } from "react-router-dom"
import { getCountrybyId } from "../../actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as S from './Detail.module.css'

export default function CountryDetail(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountrybyId(id))
    }, [dispatch, id])

    
    return (
        <div className={S.Cont123} >
            <h1> Country Detail </h1>
            <div className={S.Detail}>
                <h2> Country: {country.name} </h2>
                <h3> Capital: {country.capital} </h3>
                <h3> Continent: {country.continent} </h3>
                <h3> Subregion: {country.subregion} </h3>
                <h3> Area: {country.area} </h3>
                <h3> Population: {country.population} people </h3>
                <h3> Activities </h3>
                {

console.log(country.Activities)
                }
                <div className={`${S.activ}`}>
                    {
                        
                        country.Activities?.map( act => (
    
                            <ul>
                                <li> Name: {act.name} </li>
                                <li> Difficult: {act.difficult} </li>
                                <li> Duration: {act.duration} </li>
                                <li> Seasons: 
                                    <ul>
                                        {act.season.map(s =>  (<li>{s}</li>))}
                                    </ul> 
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>

            <div className={`${S.ImagenC}`}>
                <img className={`${S.Imagenn}`} src={country.flagImage} alt='' width='550px;' />
            </div>

            <div className={`${S.Buttonh}`}>
                <Link to='/Activity'>
                    <button>
                        Add one o more activities! 
                    </button>
                </Link>

                <Link to='/countries' > 
                    <button className={`${S.Buttonh}`}> Back to home </button>
                </Link>
            </div> 
    </div>
    )
} 
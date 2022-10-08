import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import { getActivities, getCountries } from "../../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from './Activities.module.css'

export default function Activities(){
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    console.log(activities)
    

    return(
        <div className={S.main}>
            <h1> List of Activities </h1>
            <div className={S.activsC}>
                <div className={S.empty}>
                {
                    activities.length === 0 ?
                            <div>
                                <h1> There is no asigned activities in the countries. Please, 
                                    go to create activity to append at least one!  
                                </h1>
                            </div>
                    
                      : activities?.map(activ =>
                        <div className={S.activs}>
                            <p> id: {activ.id}</p>
                            <p> Name: {activ.name} </p>
                            <p> Difficult: {activ.difficult} </p>
                            <p> Duration: {activ.duration} </p>
                            <p> Seasons: </p>
                            {
                                activ.season.map(season => (
                                    <li> {season} </li>
                                ))
                            }
                            <p> Countries: </p>
                            {
                                activ.Countries.map(country => (
                                    <li>
                                        <Link className={S.ref} to={`/countries/${country.id}`}> 
                                             {country.name}
                                        </Link>
                                    </li>
                                    
                                ))
                            }

                        </div>
                        ) 
                }
            </div>

            </div>
            <Link to='/Activity' > 
                <button className={S.btn}> Create </button>
            </Link>

            <Link to='/countries'> 
                <button className={S.btn} > Back to home </button>
            </Link>
        </div>
    )
}
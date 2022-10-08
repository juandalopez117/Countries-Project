import React from "react";
import './filtering.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect  } from "react";
import { getActivities , getCountries} from "../../actions";


export default function Filtering({handleOrderAlphabet, handleOrderPopulation, 
                                    handleOrderByContinent, handleFilterByActivity}){

    const dispatch = useDispatch()
    const countries = useSelector(state => state.allCountries)

    useEffect(() =>{
        dispatch(getActivities())
        dispatch(getCountries())
    }, [dispatch])

      let Names = []
      countries.forEach(country => {
        country.Activities?.forEach(activity => {
            if(!Names.includes(activity.name)){
                Names.push(activity.name)
            }
        })
    })
    
    return (
        <div className="Filter">
            {/* por continente  */}
            <div className="box">
                <p> Filter by Continent</p>
            <select onChange={e =>{handleOrderByContinent(e)
            }}>
                {/* <option value=''> All </option> */}
                <option value='' > Order </option>
                <option value='Africa'> Africa </option>
                <option value='Asia'> Asia </option>
                <option value='Europe'> Europe </option>
                <option value='Oceania'> Oceania </option>
                <option value='Antarctica'> Antarctica </option>
                <option value='North America'> North America </option>
                <option value='South America'> South America </option>
            </select>
            </div>

            {/* alfabeticamente */}
            <div className="box2">
                <p> Order alphabetically </p>
                <select onChange={e => handleOrderAlphabet(e)}>
                <option value=''> Order by </option>
                <option value='asc'> From A to Z </option>
                <option value='desc'> From Z to A </option>
            </select>
            </div>

            {/* por población */}
            <div className="box3">
                <p> Order by Population</p>
            <select onChange={e => handleOrderPopulation(e)}> 
                <option value=''> Order by </option>
                <option value='high population'> Low </option>.
                <option value='low population'> High </option>
            </select>
            </div>

            {/* Por actividad */}
            <div className="box4">
                <p> Filter by Activity</p>
                <select onChange={e => handleFilterByActivity(e)} >
                    <option value=''> Activity </option>
                    {
                        Names?.map(name => (
                            <option value={name}> {name} </option>
                        ))
                    }
                </select >
            </div>
        </div>
    )
}
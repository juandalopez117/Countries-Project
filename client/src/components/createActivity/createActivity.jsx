import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postActivity, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./Validators";
import './createActivity.css'
import S from './Validators.module.css'


export default function CreateActivity(){
    const dispatch = useDispatch()

    const Countries = useSelector(state => state.allCountries)
    const [errors, setErrors] = useState({})

    const initialState = {
        id: '',
        name: '',
        difficult: 0,
        duration: 0,
        season: [],
        countries: [],
    }


    const [input, setInput] = useState({
        id: '',
        name: '',
        difficult: 0,
        duration: 0,
        season: [],
        countries: [],
    })

    useEffect(() =>{
        dispatch(getCountries())
    }, [dispatch])


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input, 
            [e.target.name] : e.target.value
        }))
    }

    function handleSelect2(e){
        if(!input.season.includes(e.target.value)){
            setInput({
            ...input,
            season: [...input.season, e.target.value]
        })}
        }
        

    function handleCloseSeason(e){
        e.preventDefault()
        const filter = input.season.filter(s => s !== e.target.value)
        setInput({
            ...input, 
            season: filter
        })
    }

    function handleCloseCountry(e){
        e.preventDefault()
        const Filter = input.countries.filter(co => co !== e.target.value)
        setInput({
            ...input,
            countries: Filter
        })
        console.log(input.countries)
    }

    function handleSelect(e){
        e.preventDefault()
        if(!input.countries.includes(e.target.value)){
            setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })}
        }

        
       
    function handleSubmit(e){
        e.preventDefault()

        dispatch(postActivity(input))
        alert('done!')
        setInput(initialState)
    }
    
    return(
        <div className="create">
            <h1> Create a new Activity for do in one or more countries! </h1>
            <div className="Form">
                <form onSubmit={e => handleSubmit(e)}>
                    <div key='1'>
                        <label> ID: </label>
                        <input type='text' min='0' value={input.id} name='id' onChange={e => handleChange(e)}
                        className={errors.id ? 'Inputs' : null}
                        />
                        {
                            errors.id && (<p className={S.Error}> {errors.id} </p>)
                        }
                    </div>
                    
                    <div key='2'>
                        <label> Name: </label>
                        <input type='text' value={input.name} name='name' onChange={e => handleChange(e)}
                        className={errors.name ? 'Inputs' : null}
                        />
                        {
                            errors.name && (<p className={S.Error}> {errors.name} </p>)
                        } 
                    </div>

                    <div key='3'>
                        <label> Difficult: (between 1 and 10) </label>
                        <input type='number' min='0' max='10' 
                            value={input.difficult} name='difficult' onChange={e => handleChange(e)}
                        /> 
                    </div>

                    <div key='4'>
                        <label> Duration: (in hours - 00:00 to 24:00) </label>
                        <input type='number' value={input.duration} min='0' max='24' 
                        name='duration' onChange={e => handleChange(e)}/> 
                    </div>

                    <div key='5' className="">
                        <label> Countries: </label>
                        <select onChange={e => handleSelect(e)} >
                        {
                            Countries?.map(country => (
                                <option value={country.id}>
                                    {country.name}  
                                </option>
                                
                            ))
                        }
                        </select>
                    </div>

                    <div key='6'>
                    <label> Seasons </label>
                        <select onChange={e => handleSelect2(e)} >
                            <option value={null}> Seasons: </option>
                            <option name='Spring' value='Spring' > Spring </option>
                            <option name='Summer' value='Summer'> Summer </option>
                            <option name='Autumn' value='Autumn'> Autumn </option>
                            <option name='Winter' value='Winter'> Winter </option>
                        </select>
                    </div>

                    <button type="submit" disabled={(Object.keys(errors).length > 0 
                        || input.id === initialState.id
                        || input.name ===initialState.name
                        || input.countries.length === 0 
                        || input.season.length === 0) 
                        ? true : false}> Create Activity </button>
                </form>
            </div>
                
            <div className="Names">
                <p> Countries </p>
                    <div>{input.countries.map(c => {
                        let count = Countries.filter(co => co.id === c)[0].name
                        return (
                            <div className="Close"> 
                                <button 
                                onClick={e => handleCloseCountry(e)}
                                value={c}> X </button>
                                <p> {count} </p> 
                            </div>
                            )
                        })}
                    </div>
            </div>

            <div className='seasons'>
                    <p> Seasons </p>
                    <div>{input.season.map(c => {
                        return (
                            <div className="Close"> 
                                <button 
                                onClick={e => handleCloseSeason(e)}
                                value={c}> X </button>
                                <p> {c} </p> 
                            </div>
                            )
                        })}
                    </div>
            </div>

            <Link to='/countries' > 
                <button className="Home"> Back to home </button>
            </Link>
            
        </div>
    )
}
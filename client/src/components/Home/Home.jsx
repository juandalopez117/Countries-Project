import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderAlphabetically, orderByContinent, orderBypopulation, filterByActivity} from "../../actions";
import Filtering from '../filtering/filtering.jsx'
import Card from "../Card/Card";
import Pagination2 from '../Pagination2/Pagination2.jsx';
import Nav from '../Nav/Nav.jsx'
import Footer from "../Footer/Footer";
import './Home.css'


export default function Home(){
    const dispatch = useDispatch() // despachar acciones
    //MapStateToProps
    const allCountries = useSelector((state) => state.allCountries)

    useEffect( () => {
        //MapDispatchToProps
        dispatch(getCountries())
    }, [dispatch])



    const [actualPage, setActualPage] = useState(1) //pagina inicial
    const [countriesPerPage, /* setCountriesPerPage */] = useState(10) // paises por pagina
    const indexLastCountry = actualPage * countriesPerPage // 10 
    const indexFirstCountry = indexLastCountry - countriesPerPage 
    const actualCountries = allCountries?.slice(indexFirstCountry, indexLastCountry)
    const [maxPageLimit, setMaxPageLimit] = useState(10);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [/* order */, setOrder] = useState('')
    const [/* population */, setPopulation] = useState('')
    const [/* continent */, setContinent] = useState('')
    const pageNumberLimit = countriesPerPage

    const pagination = (pageNumber) => {
        setActualPage(pageNumber)
    }
    


    const onPrevClick = ()=>{
        if((actualPage - 1 ) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setActualPage(prev => prev - 1);
     }

    const onNextClick = ()=>{
        if(actualPage + 1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setActualPage(prev=> prev + 1);
     }

     function handleOrderAlphabet(e){
        e.preventDefault()
        dispatch(orderAlphabetically(e.target.value))
        setOrder(`Ordered by: ${e.target.value}`)
     }

     function handleOrderPopulation(e){
        e.preventDefault()
        dispatch(orderBypopulation(e.target.value))
        setPopulation(`Ordered by: ${e.target.value}`)
     }

     function handleOrderByContinent(e){
        e.preventDefault()
        dispatch(orderByContinent(e.target.value))
        setContinent(`Ordered by: ${e.target.value}`)
     }

     function handleFilterByActivity(e){
        e.preventDefault()
        dispatch(filterByActivity(e.target.value))
     }



    return (
        <div className="container">

            <div>
                <Nav />
            </div>

            <div className="Bodyf">
                    <Filtering
                    handleOrderAlphabet={handleOrderAlphabet}
                    handleOrderPopulation={handleOrderPopulation}
                    handleOrderByContinent={handleOrderByContinent}
                    handleFilterByActivity={handleFilterByActivity}
                    />

                    <Pagination2 countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={pagination}
                    maxPageLimit={maxPageLimit}
                    minPageLimit={minPageLimit}
                    onNextClick={onNextClick}
                    onPrevClick={onPrevClick}
                    className='Pagination'
                />

                <div className="Countries">
                {
                    actualCountries?.map(country => {
                        return (
                            <Card key={country.id} country={country.name}
                            image={country.flagImage}
                            continent={country.continent}
                            id={country.id}
                            />
                        )
                    })
                }
                </div>
            </div>
            <Footer />
        </div>
    )
}
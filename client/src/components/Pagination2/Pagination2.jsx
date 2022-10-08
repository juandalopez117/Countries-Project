import React from "react";
import {useState, useEffect} from 'react'
import './Pagination.css'


export default function Pagination2({countriesPerPage, allCountries, paginado, maxPageLimit, minPageLimit,
    onPrevClick, onNextClick, currentPage
    }){

    const [pageNumbers, setPageNumbers] = useState([])
    useEffect(() => {

        const pageNumbers = []
        /* const pageNumbers = [] */
        for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
            pageNumbers.push(i)
        }
        setPageNumbers(pageNumbers)

    }, [allCountries, countriesPerPage,  paginado, maxPageLimit, minPageLimit,  onPrevClick, onNextClick])
    
    const handleNextClick = ()=>{
        onNextClick();
    }

    const handlePrevClick = ()=>{
        onPrevClick();
    }

    const Numbers = pageNumbers.map(number => {
        if(number <= maxPageLimit  && number > minPageLimit ){
            return(
            <button key={number}   onClick={() => {
                paginado(number)}}
                className='button1'
                >{number}</button>
            )
        }
        else{
            return null
        }
    })

    return (
        <div className="main">
            <div className="mainData">
                <button className="button1" onClick={handlePrevClick} disabled={currentPage === pageNumbers[0]}> {'<<'} </button>
                    {/* {pageDecremenEllipses} */}
                   
                    {Numbers}
                    
                    
                
                    
                    {/* {pageIncrementEllipses} */}
                    {<button className="button1" onClick={handleNextClick} disabled={currentPage === pageNumbers[pageNumbers.length-1]}> {'>>'} </button>}
            </div>
        </div>
    )
}
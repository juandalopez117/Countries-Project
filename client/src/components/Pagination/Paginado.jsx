import React from "react";
import {useState, useEffect} from 'react'

export default function Pagination({countriesPerPage, allCountries, paginado}){
    const [pageNumbers, setPageNumbers] = useState([])
    
    useEffect(() => {
        const pageNumbers = []
        for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
            pageNumbers.push(i)
        }
        setPageNumbers(pageNumbers)

    }, [allCountries, countriesPerPage])

    return (
        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <button onClick={() => paginado(number)} key={`${number}paginado`} className= 'pagination'>
                            {number}
                        </button>
                    ))
                }
            </ul>
        </nav>
    )
}
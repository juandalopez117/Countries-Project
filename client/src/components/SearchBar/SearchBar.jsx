import React , {useState} from "react";

import { useDispatch } from "react-redux";
import { getCountryByName } from "../../actions";
import * as S from './SearchBar.module.css'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(name !== ''){
          dispatch(getCountryByName(name))
          setName('')

          } else {
            alert('Please enter a country name')
          }
      }

    return(
        <div className={S.inputgroup}>
            <form>
            <input
                className={S.input}
                type='text'
                value={name}
                placeholder="Country..."
                onChange={e => handleInputChange(e)} />
                <button type="submit" className={S.btn} onClick={e => handleSubmit(e)}> 
                   Search
                </button>
            </form>
        </div>
    )
}
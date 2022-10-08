import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { getCountries } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import * as S from './Nav.module.css'

export default function Nav(){

    const dispatch = useDispatch()

    function handleDispatch(){
        dispatch(getCountries())
    }

    function handleClick(event) {
        event.preventDefault()
        dispatch(getCountries())
    }

    return (
        <header className={S.NavBar}>
            <nav>
                <div className={S.cosas}>
                    <Link className={S.main} to='/home' onClick={e => handleClick(e)}> 
                    <img  className={S.iconMain} src='./World_icon.svg' alt="" />
                        Countries App 
                    </Link>
                    <div className={S.last}>
                        <Link className={S.ulNav} to="/countries"  onClick={()=> handleDispatch()}> Home </Link>
                        <Link className={S.ulNav} to="/Activity"> Create Activity</Link>
                        <Link className={S.ulNav} to="/About"> About </Link>
                        <Link className={S.ulNav} to="/Activities"> Activities </Link>
                    </div>
                    <div className={S.searchBar}>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </header>
    )
}
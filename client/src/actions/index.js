import axios from "axios";

export function getCountries(){
    return async function (dispatch){
        var json = await axios.get('http://localhost:3001/countries')
    
    return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data
    })
}   
}

export function getCountryByName(name){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: 'GET_COUNTRY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
  }

export function getCountrybyId(id){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: 'GET_COUNTRY_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

  export function orderAlphabetically(payload){
    return ({
        type: 'ORDER_BY_NAME',
        payload: payload
    })
  }

  export function orderBypopulation(payload){
    return ({
        type: 'ORDER_BY_POPULATION',
        payload: payload
    })
  }

  export function orderByContinent(payload){
    return({
        type: 'ORDER_BY_CONTINENT',
        payload: payload
    })
  }

  export function filterByActivity(payload){
    return ({
        type: 'FILTER_BY_ACTIVITY',
        payload: payload
    })
  }

  export function postActivity(body){
    return async function(dispatch){
        try {
            var  response = await axios.post('http://localhost:3001/activities', body)
            console.log(response)
            return dispatch({
                type: 'POST_ACTIVITY',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
  }

function setActivities(payload){
    return {
        type: 'GET_ACTIVITIES',
        payload: payload
    }
}
  export function getActivities(){
    return function(dispatch){
        axios.get(`http://localhost:3001/activities`)
        .then(activs => {dispatch(setActivities(activs.data))})
        .catch(error => console.log(error))

    }
  }


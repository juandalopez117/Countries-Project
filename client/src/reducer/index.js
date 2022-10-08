const initialState = {
    countries: [],
    allCountries: [],
    activities : [],
    country: [],
    filtered: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        
        case 'GET_COUNTRIES':
            return {
                ...state, 
                countries : action.payload, 
                allCountries: action.payload,
                filtered: []
            };

        case 'GET_COUNTRY_NAME':
            let country = [];

            if(!action.payload){
                return "This Country doesn't exist"
            } else {
                country.push(action.payload)
            }
            
            return { 
                ...state, 
                allCountries: country[0],
                filtered: []
              };

        //Alphabet
        case 'ORDER_BY_NAME':
            const order = action.payload
            let OrderedName
            if(state.filtered.length > 0){
                OrderedName = [...state.filtered]
            }

            else{
                OrderedName = [...state.allCountries]
            }

            if(order === null){
                return{
                    ...state
                }
            }

            else if(order === 'asc'){
                OrderedName = state.allCountries.sort(function(a,b){
                    if(a.name > b.name){
                        return 1
                    }
    
                    else if (a.name < b.name){
                        return -1
                    }
    
                    else{
                        return 0
                    }
                }) 

            }

            else if(order === 'desc'){
                OrderedName = state.allCountries.sort(function(a,b){
                    if(a.name < b.name){
                        return 1
                    }
    
                    else if(a.name > b.name){
                        return -1
                    }
    
                    else{
                        return 0
                    }
                })
            }
            else{
                OrderedName = [...state.allCountries]
            }

            return {
                ...state, 
                filtered: OrderedName
            }
        //population
        case 'ORDER_BY_POPULATION':
            let OrderedPop
            const orderpop = action.payload

            if(state.filtered.length > 0){
                OrderedPop = [...state.filtered]
            }

            else{
                OrderedPop = [...state.allCountries]
            }

            if(orderpop === 'high population'){
                OrderedPop = state.allCountries.sort(function (a,b){
                    if(a.population > b.population){
                        return 1
                    }

                    else if(a.population < b.population){
                        return -1 
                    }

                    else{
                        return 0
                    }
                })
            }

            else if(orderpop === 'low population')
                OrderedPop = state.allCountries.sort(function(a,b){
                    if(a.population < b.population){
                        return 1
                    }

                    else if(a.population > b.population){
                        return -1
                    }

                    else{
                        return 0
                    }
            })

            else{
                OrderedPop = [...state.allCountries]
            }
        return {
            ...state, 
            filtered: OrderedPop
        }

        case 'ORDER_BY_CONTINENT':
            const Continent = action.payload
            if(Continent === null){
                return{
                    ...state
                }
            }
            const Filtered = state.countries.filter(country => country.continent.includes(Continent))
            return {
                ...state, 
                allCountries: Filtered
            }

        case 'FILTER_BY_ACTIVITY':
            if(action.payload === ''){
                return {
                    ...state
                }
            }
            const Activity = action.payload
            let filtered = []
            state.allCountries.forEach(country => {
                if(country.Activities !== undefined){
                    country.Activities?.forEach(activity => {
                    if(activity.name === Activity){
                        return filtered.push(country)
                    }
                })
                }
            })
            return {
                ...state, 
                allCountries: filtered
            }
        
        case 'POST_ACTIVITY':
            return {
                ...state, 
            }

        case 'GET_ACTIVITIES':
            return {
                ...state, 
                activities: action.payload
            }
        
        case 'GET_COUNTRY_DETAIL':
            return {
                ...state, 
                country: action.payload
            }
        
        default:
            return state;
    }
}

export default rootReducer
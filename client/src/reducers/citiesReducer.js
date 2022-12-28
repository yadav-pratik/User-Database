const initialCitiesValue = []

const citiesReducer = (state = initialCitiesValue, action) => {
    switch(action.type) {
        case 'SET_CITIES' : {
            return [...action.payload]
        }
        case 'CLEAR_COUNTRY_DATA' : {
            return [...initialCitiesValue]
        }
        default : {
            return state
        }
    }
}

export default citiesReducer
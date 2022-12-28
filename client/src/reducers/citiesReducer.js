const initialCitiesValue = []

const citiesReducer = (state = initialCitiesValue, action) => {
    switch(action.type) {
        case 'SET_CITIES' : {
            return [...action.payload]
        }
        default : {
            return state
        }
    }
}

export default citiesReducer
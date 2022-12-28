const initialCountriesValue = []

const countriesReducer = (state = initialCountriesValue, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES' : {
            return [...action.payload]
        }
        default : {
            return state
        }
    }
}

export default countriesReducer
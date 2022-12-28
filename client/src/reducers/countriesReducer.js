const initialCountriesValue = []

const countriesReducer = (state = initialCountriesValue, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES' : {
            return [...action.payload]
        }
        case 'CLEAR_COUNTRY_DATA' : {
            return [...initialCountriesValue]
        }
        default : {
            return [...state]
        }
    }
}

export default countriesReducer
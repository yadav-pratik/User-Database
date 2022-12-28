const initialStatesValue = []

const statesReducer = (state = initialStatesValue, action) => {
    switch(action.type) {
        case 'SET_STATES' : {
            return [...action.payload]
        }
        case 'CLEAR_COUNTRY_DATA' : {
            return [...initialStatesValue]
        }
        default : {
            return state
        }
    }
}

export default statesReducer
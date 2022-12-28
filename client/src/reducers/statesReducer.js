const initialStatesValue = []

const statesReducer = (state = initialStatesValue, action) => {
    switch(action.type) {
        case 'SET_STATES' : {
            return [...action.payload]
        }
        default : {
            return state
        }
    }
}

export default statesReducer
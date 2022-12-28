const initialIsLoggedValue = localStorage.getItem('token') ? true : false

const isLoggedReducer = (state = initialIsLoggedValue, action) => {
    switch(action.type) {
        case 'TOGGLE' : {
            return !state
        }
        default : {
            return state
        }
    }
}

export default isLoggedReducer
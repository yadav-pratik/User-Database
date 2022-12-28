const initialUserValue = []

const usersReducer = (state = initialUserValue, action) => {
    switch(action.type){
        case 'SET_USERS' : {
            return [...action.payload]
        }
        case 'DELETE_USER' : {
            return state.filter(user =>  {
                return user._id !== action.payload
            })
        }
        case 'UPDATE_USERS' : {
            return state.map(user => {
                if(user._id === action.payload._id){
                    return {...user, ...action.payload}
                } else {
                    return {...user}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default usersReducer
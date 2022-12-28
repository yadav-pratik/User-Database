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
        default : {
            return [...state]
        }
    }
}

export default usersReducer
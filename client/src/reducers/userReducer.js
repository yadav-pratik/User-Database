const initialUserValue = {}

const userReducer = (state = initialUserValue, action) => {
    switch(action.type){
        default : {
            return {...state}
        }
    }
}

export default userReducer
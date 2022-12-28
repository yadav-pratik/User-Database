import { createStore, combineReducers } from "redux"

import isLoggedReducer from "../reducers/isLoggedReducer"

const configureStore = () => {
    return createStore(combineReducers({
        isLogged : isLoggedReducer
    }))
}

export default configureStore
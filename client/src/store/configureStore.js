import { createStore, combineReducers } from "redux"

import isLoggedReducer from "../reducers/isLoggedReducer"
import countriesReducer from "../reducers/countriesReducer"

const configureStore = () => {
    return createStore(combineReducers({
        isLogged : isLoggedReducer,
        countries : countriesReducer
    }))
}

export default configureStore
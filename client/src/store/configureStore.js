import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import isLoggedReducer from "../reducers/isLoggedReducer"
import countriesReducer from "../reducers/countriesReducer"

const configureStore = () => {
    return createStore(combineReducers({
        isLogged : isLoggedReducer,
        countries : countriesReducer
    }), applyMiddleware(thunk))
}

export default configureStore
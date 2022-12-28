import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import isLoggedReducer from "../reducers/isLoggedReducer"
import countriesReducer from "../reducers/countriesReducer"
import statesReducer from "../reducers/statesReducer"

const configureStore = () => {
    return createStore(combineReducers({
        isLogged : isLoggedReducer,
        countries : countriesReducer,
        states : statesReducer
    }), applyMiddleware(thunk))
}

export default configureStore
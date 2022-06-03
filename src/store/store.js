import { combineReducers, configureStore } from "@reduxjs/toolkit"
import CounterReducer from './reducers/counter'

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}
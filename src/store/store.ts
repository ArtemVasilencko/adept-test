import { combineReducers, configureStore } from '@reduxjs/toolkit'
import companyReducer from './reducers/company-slice'

const rootReducer = combineReducers({
    companyReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

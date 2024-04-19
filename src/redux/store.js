import { createStore, combineReducers } from 'redux'
import { createSlice } from './contactsSlice'

const persistReducer = combineReducers({
    contacts: createSlice
    
})
export const store = createStore(persistReducer)
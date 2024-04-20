import { createStore, combineReducers } from 'redux'
import { createSlice } from './contactsSlice'
import { devToolsEnhancer } from '@redux-devtools/extension';

const persistReducer = combineReducers({
    contacts: createSlice
    
})
const enhancer = devToolsEnhancer();
export const store = createStore(persistReducer, enhancer)
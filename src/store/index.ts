import { CardState } from './../types/card';
import { combineReducers } from "redux";
import cardReducer from "./reducers/cardReducer";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
export interface AppState {
    card: CardState
}


const rootReducer = combineReducers<AppState>({
    card: cardReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

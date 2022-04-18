import { CardState } from './../types/card';
import { combineReducers } from "redux";
import cardReducer from "./reducers/cardReducer";

interface AppState {
    card: CardState
}


const rootReducer = combineReducers<AppState>({
    card: cardReducer
})

export default rootReducer;
import { CardState, CardAction } from "./../../types/card";

const defaultState: CardState = {
    card:[],
    totalMoney:100000000000,
    total:0
};

const cardReducer = (state: CardState = defaultState, action: CardAction) => {
  return state;
};

export default cardReducer;

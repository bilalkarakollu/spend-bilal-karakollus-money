import { CardState, CardAction } from "./../../types/card";

const defaultState: CardState = {
    card:[],
    totalMoney:100000000000,
    total:0
};

const cardReducer = (state: CardState = defaultState, action: CardAction) => {
  switch(action.type){
    case "ADD_PRODUCT":
      const existingItem = state.card.find(item => item.id === action.payload.id);
      if(existingItem){
        return {
          ...state,
          card: state.card.map(item => item.id === action.payload.id ? {...item, count: item.count + 1} : item),
          total: state.total + 1,
          totalMoney: state.totalMoney - action.payload.money
        };
      }else{
        return {
          ...state,
          card: [...state.card, {...action.payload, count: 1}],
          total: state.total + 1,
          totalMoney: state.totalMoney - action.payload.money
        };
      }
    case "DELETE_PRODUCT":
      const isProduct = state.card.find(item => item.id === action.payload);
      if(isProduct && isProduct.count > 1){
        return {
          ...state,
          card: state.card.map(item => item.id === action.payload ? {...item, count: item.count - 1} : item),
          total: state.total - 1,
          totalMoney: state.totalMoney + isProduct.money
        }
      }else{
        return {
          ...state,
          card: state.card.filter(item => item.id !== action.payload),
          total: state.total - 1,
          // @ts-ignore
          totalMoney: state.totalMoney + isProduct.money
        }
      }
      default: return state;
  }
};

export default cardReducer;

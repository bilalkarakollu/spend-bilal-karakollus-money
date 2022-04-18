import { ThunkDispatch } from "redux-thunk";

export interface ProductType {
    id:number;
    money: number;
    name: string;
    img: string;
    count :number;
}

export interface CardState {
    card: ProductType[];
    totalMoney: number;
    total:number;
    totalPrice:number;
}

interface ADD_PRODUCT {
    type: "ADD_PRODUCT";
    payload: ProductType;
}

interface DELETE_PRODUCT {
    type: "DELETE_PRODUCT";
    payload: number;
}

export type CardAction = ADD_PRODUCT | DELETE_PRODUCT;
export type CardDispatch = ThunkDispatch<CardState, void, CardAction>
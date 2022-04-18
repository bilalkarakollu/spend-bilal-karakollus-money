export interface ProductType {
    id:number;
    money: number;
    name: string;
    img: string;
}

export interface CardState {
    card: ProductType[];
    totalMoney: number;
    total:number;
}

interface ADD_PRODUCT {
    type: "ADD_PRODUCT";
    action: ProductType;
}

interface DELETE_PRODUCT {
    type: "DELETE_PRODUCT";
    action: number;
}

export type CardAction = ADD_PRODUCT | DELETE_PRODUCT;
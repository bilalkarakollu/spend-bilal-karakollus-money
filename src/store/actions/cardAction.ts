import { ProductType, CardDispatch } from "./../../types/card";
/*
export const addProduct = () => (product: ProductType) => {
  return { type: "ADD_PRODUCT", payload: product };
};
*/

export const deleteProduct =
  (id: number) => async (dispatch: CardDispatch) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

export const addProduct =
  (product: ProductType) => async (dispatch: CardDispatch) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

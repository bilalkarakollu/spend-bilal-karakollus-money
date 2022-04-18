import { useEffect } from "react";
import { FunctionComponent } from "react";
import { useState, ChangeEvent } from "react";
import { Button, TextField, Box } from "@mui/material";
import { ProductType } from "../../../types/card";
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from '../../../store/actions/cardAction';

interface IProductProps {
  product: ProductType;
}

const ProductFooter: FunctionComponent<IProductProps> = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const [input, setInput] = useState(0);
  const [isSell, setIsSell] = useState(true)

  const addBuy = () => {
      //dispatch(addProduct(product))
  }
/*
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if(value > -1){
      setInput(Number(value));
    }
  };*/

  const handleClickBuy = () => {
    setIsSell(false)
    setInput(prev => prev+1);
    // @ts-ignore
    dispatch(addProduct(product))

  }

  const handleClickSell = () => {
    setInput(prev => prev-1);
    // @ts-ignore
    dispatch(deleteProduct(product.id))
  }

  useEffect(() => {
    if(input < 1){
      setIsSell(true)
    }
  }, [input])

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Button onClick={handleClickSell} disabled={isSell} color="error" variant="contained" sx={{ px: 5 }}>
        Sell
      </Button>
      <TextField
        type={"text"}
        sx={{ mx: 2, p: 0 }}
        size="small"
        value={input}
      />
      <Button onClick={handleClickBuy} variant="contained" sx={{ px: 5 }}>
        Buy
      </Button>
    </Box>
  );
};

export default ProductFooter;

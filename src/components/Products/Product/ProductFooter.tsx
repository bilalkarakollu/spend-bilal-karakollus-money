import { FunctionComponent } from "react";
import { useState, ChangeEvent } from "react";
import { Button, TextField, Box } from "@mui/material";
import { ProductType } from "../../../types/card";

interface IProductProps {
  product: ProductType;
}

const ProductFooter: FunctionComponent<IProductProps> = (props) => {
  const { product } = props;

  const [input, setInput] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if(value > -1){
      setInput(Number(value));
    }
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Button disabled={true} color="error" variant="contained" sx={{ px: 5 }}>
        Sell
      </Button>
      <TextField
        type={"number"}
        sx={{ mx: 2, p: 0 }}
        size="small"
        value={input}
        onChange={handleChange}
      />
      <Button variant="contained" sx={{ px: 5 }}>
        Buy
      </Button>
    </Box>
  );
};

export default ProductFooter;

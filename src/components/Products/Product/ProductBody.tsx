import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { ProductType } from "../../../types/card";
import { MoneyFormat } from '../../../utils/MoneyFormat';

interface IProductProps {
  product: ProductType;
}

const ProductBody: FunctionComponent<IProductProps> = (props) => {
  const { product } = props;

  return (
    <Box my={2}>
      <Typography textAlign={"center"} fontWeight={500} fontSize={23}>
        {product.name}
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={500}
        fontSize={20}
        color={"green"}
      >
        ${MoneyFormat(product.money)}
      </Typography>
    </Box>
  );
};

export default ProductBody;

import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { ProductType } from '../../../types/card';

interface IProductProps {
  product: ProductType
}

const ProductImg: FunctionComponent<IProductProps> = (props) => {

  const {product} = props

  return (
    <Box p={2} display={'flex'} justifyContent={'center'}>
       <Box component={'img'} height={120} src={product.img}/>
    </Box>
  )
}

export default ProductImg

import { FunctionComponent } from 'react';
import { Grid, Box } from '@mui/material';
import ProductImg from './ProductImg';
import ProductBody from './ProductBody';
import ProductFooter from './ProductFooter';
import { ProductType } from '../../../types/card';

interface IProductProps {
  product: ProductType
}

const Product: FunctionComponent<IProductProps> = (props) => {

  const product = props.product;

  return (
    <Grid item xs={12} md={4}>
      <Box p={2} sx={{backgroundColor:'white'}}>
        <ProductImg product={product}/>
        <ProductBody product={product}/>
        <ProductFooter product={product}/>
      </Box>
    </Grid>
  )
}

export default Product

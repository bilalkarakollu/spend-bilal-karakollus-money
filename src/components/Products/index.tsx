import Product from "./Product"
import { Grid } from '@mui/material';
import { data } from "../../api/data";

const Products = () => {
    console.log(data)
  return (
    <Grid container spacing={2} mt={0.1}>
        {data.map(product => <Product product={product}/>)}
    </Grid>
  )
}

export default Products

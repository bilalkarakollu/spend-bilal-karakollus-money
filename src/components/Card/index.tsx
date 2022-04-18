import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { ProductType } from "../../types/card";
import { Box, Grid, Typography } from "@mui/material";
import { MoneyFormat } from "../../utils/MoneyFormat";

const Card = () => {
  const {card, totalMoney, totalPrice} = useSelector((state: AppState) => state.card);
  console.log(card);
  return (
    <Box sx={{backgroundColor:'white', p:5}}>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} md={5}>
            <Typography textAlign={'center'} borderBottom={'1px solid black'} fontSize={25} fontWeight={500}> Your Recipe </Typography>
          {
            // @ts-ignore
            card.map((element: ProductType, index: number) => {
              return (
                <Box
                  key={index}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box>{element.name}</Box>
                  <Box>x{element.count}</Box>
                  <Box>$ {element.count * element.money}</Box>
                </Box>
              );
            })
          }
          <Box border={'1px solid black'}></Box>
          <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
              <Box fontWeight={500} fontSize={25}>Total</Box>
              <Box fontWeight={500} fontSize={25}>{MoneyFormat(totalPrice)}</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;

import { Box, Typography, Avatar } from "@mui/material";
import { AppState } from '../store'
import { useSelector } from "react-redux";

const Header = () => {

    const {totalMoney} = useSelector((state:AppState) => state.card);

  return (
    <>
      <Box p={5} my={3} sx={{ backgroundColor: "white" }}>
        <Box my={2} display="flex" justifyContent={"center"}>
          <Avatar
            alt="bilal karakollu"
            src="/img/bilal_karakollu.png"
            sx={{ width: 125, height: 125 }}
          />
        </Box>
        <Box>
          <Typography
            textAlign={"center"}
            mt={3}
            variant="h1"
            fontSize={30}
            fontWeight={500}
          >
            Spend Bilal Karakollu's Money
          </Typography>
        </Box>
      </Box>
      <Box py={2} sx={{backgroundColor:'yellowgreen'}}>
            <Typography textAlign={'center'} fontSize={32} variant={'h2'} fontWeight={700} color={'white'}>${totalMoney}</Typography>
      </Box>
    </>
  );
};

export default Header;

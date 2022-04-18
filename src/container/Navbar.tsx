import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="inherit" sx={{py:2}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:25, fontWeight:700 }}>
            Spend Bilal Karakollu's Money
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

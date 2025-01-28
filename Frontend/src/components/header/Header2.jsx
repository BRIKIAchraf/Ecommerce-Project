/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Styled component for search input
const SearchField = styled(TextField)(({ theme }) => ({
  borderRadius: 22,
  backgroundColor: "#f1f3f4",
  padding: "0 8px",
  "& .MuiInputBase-root": {
    height: 40,
  },
}));

const Header2 = () => {
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems="center">
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
      
      <SearchField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: 300 }}
      />

      <Stack direction="row" alignItems="center">
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;

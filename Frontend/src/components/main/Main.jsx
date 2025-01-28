/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useTheme } from "@mui/material/styles"; // Corrected import from @mui/material/styles
import Close from '@mui/icons-material/Close'; // Corrected individual import
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'; // Correct import
import Rating from '@mui/material/Rating'; // Corrected import for Rating

import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  IconButton
} from "@mui/material";

import { useState } from "react";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [alignment, setAlignment] = useState("left"); // Corrected alignment variable
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment); // Prevent setting null when unselecting all buttons
    }
  };

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false); // Corrected function name
  };

  return (
    <Container sx={{ py: 9 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={3}>
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={alignment} // Added value attribute to ToggleButtonGroup
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton sx={{ color: theme.palette.text.primary }} value="left" aria-label="left aligned">
            All Products
          </ToggleButton>
          <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} value="center" aria-label="center aligned">
            Homme Category
          </ToggleButton>
          <ToggleButton sx={{ color: theme.palette.text.primary }} value="right" aria-label="right aligned">
            Femme Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
        {["aaaa", "bbbb"].map((item) => (
          <Card key={item} sx={{ maxWidth: 345, mt: 6, ":hover .MuiCardMedia-root": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
            <CardMedia
              sx={{ height: 244 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="Achraf briki test"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h6" component="div">
                  T-shirt
                </Typography>
                <Typography variant="subtitle1" component="p">
                  13 Dinar
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Example description text with product details and additional features.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="large">
                <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                Add to cart
              </Button>
              <Rating precision={0.1} name="read-only" value={4.5} readOnly />
            </CardActions>
          </Card>
        ))}
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  );
};

export default Main;

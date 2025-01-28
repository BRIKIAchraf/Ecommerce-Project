/* eslint-disable no-unused-vars */
import {
    Box,
    Container,
    Drawer,
    IconButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Button,
    Menu,
    MenuItem,
    Accordion,
    AccordionSummary,
    List,
    ListItem,
    ListItemButton,
  } from "@mui/material";
  import {
    Window as WindowIcon,
    ElectricBikeOutlined,
    LaptopChromebookOutlined,
    MenuBookOutlined,
    SportsEsportsOutlined,
    Close,
    ExpandMore as ExpandMoreIcon,
    KeyboardArrowRightOutlined,
      // Corrected import
  } from "@mui/icons-material";
  import { useState } from "react";
  import Links from "./Links";
  
  const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Container>
        <Box>
          <Button
            onClick={handleClick}
            sx={{
              width: 222,
            }}
          >
            <WindowIcon />
            <Typography
              sx={{
                padding: "0",
                textTransform: "capitalize",
                mx: 1,
              }}
            >
              Categories
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRightOutlined />
          </Button>
  
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Velo</ListItemText>
            </MenuItem>
  
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronique</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>livre</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
  
        <Drawer>
          <Box>
            <IconButton>
              <Close />
            </IconButton>
            {[
              { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
              { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "full screen menu",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
              { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "user account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
              {
                mainLink: "vendor account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
            ].map((item) => {
              return (
                <Accordion key={item.mainLink}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item.mainLink}</Typography>
                  </AccordionSummary>
                  <List>
                    {item.subLinks.map((link) => {
                      return (
                        <ListItem key={link} sx={{ px: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    );
  };
  
  export default Header3;
  
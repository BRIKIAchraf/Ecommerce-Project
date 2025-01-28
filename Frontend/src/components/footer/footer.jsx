import { Box, Typography, Button } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{

                bgcolor: "#2B3445",
                py: 1.3,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}>
            <Typography
                justifyContent={"Center"}
                display={"flex"}
                alignItems={"center"}
                variant="h6"
                color={"HighlightText"}
                sx={{
                    fontSize: 18

                }}>
                Designed and developed by
                <Button
                    sx={{
                        mx: 0.5,
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ff7790",
                    }}
                    variant="text" // why here we use a text vairant, and the color is primary
                    color="primary" >
                    achraf briki
                </Button>
                ©2023
            </Typography>

        </Box>
    );
}


export default Footer;
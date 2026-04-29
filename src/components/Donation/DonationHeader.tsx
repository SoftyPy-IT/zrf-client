"use client";

import { Box, Container, Typography } from "@mui/material";

interface DonationHeaderProps {
    language: string;
}

const DonationHeader: React.FC<DonationHeaderProps> = ({ language }) => {
    return (
        <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #216740 0%, #FEC909 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    mb: 2,
                }}
            >
                Make a Difference Today
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    textAlign: "center",
                    color: "text.secondary",
                    maxWidth: "800px",
                    mx: "auto",
                }}
            >
                Your generous donation helps us transform lives and build a better
                future for those in need.
            </Typography>
        </Box>
    );
};

export default DonationHeader;
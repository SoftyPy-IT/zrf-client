"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import { Email, Facebook } from "@mui/icons-material";

interface PartnerSectionProps {
    language: string;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ language }) => {
    return (
        <Paper
            sx={{
                mt: 8,
                p: 4,
                textAlign: "center",
                background: "linear-gradient(135deg, #FEC909 0%, #ffd700 100%)",
                borderRadius: 3,
            }}
        >
            <Typography variant="h5" fontWeight="bold" color="#216740" gutterBottom>
                Partner with Us
            </Typography>
            <Typography variant="body1" color="#216740" sx={{ mb: 3 }}>
                Join hands with us to create lasting change in communities
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <Button
                    component="a"
                    href="https://www.facebook.com/zrf.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<Facebook />}
                    sx={{ bgcolor: "#1877f2", "&:hover": { bgcolor: "#166fe5" } }}
                >
                    Facebook
                </Button>

                <Button
                    component="a"
                    href="mailto:zrfziaurrahmanfoundation@gmail.com"
                    variant="contained"
                    startIcon={<Email />}
                    sx={{ bgcolor: "#D44638", "&:hover": { bgcolor: "#c13c2f" } }}
                >
                    Email
                </Button>
            </Box>
        </Paper>
    );
};

export default PartnerSection;
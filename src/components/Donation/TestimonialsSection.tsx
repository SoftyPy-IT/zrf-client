"use client";

import {
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";

interface TestimonialsSectionProps {
    language: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
    const testimonials = [
        {
            name: "Rashed Karim",
            donation: "Regular Donor",
            quote:
                "Donating to ZRF has been a rewarding experience. I can see the real impact of my contributions.",
        },
        {
            name: "Fatema Begum",
            donation: "One-time Donor",
            quote:
                "The transparency and dedication of this organization inspired me to contribute.",
        },
        {
            name: "Md. Hasan Ali",
            donation: "Monthly Donor",
            quote:
                "Knowing that my monthly donation helps feed families keeps me motivated to continue.",
        },
    ];

    return (
        <Box sx={{ mt: 8, mb: 4 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                sx={{ mb: 4 }}
            >
                What Our Supporters Say
            </Typography>
            <Grid container spacing={3}>
                {testimonials.map((testimonial, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                transition: "transform 0.3s",
                                "&:hover": { transform: "translateY(-5px)" },
                            }}
                        >
                            <CardContent>
                                <Favorite sx={{ color: "#FEC909", mb: 2 }} />
                                <Typography
                                    variant="body1"
                                    sx={{ mb: 2, fontStyle: "italic" }}
                                >
                                    &ldquo;{testimonial.quote}&rdquo;
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {testimonial.donation}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TestimonialsSection;
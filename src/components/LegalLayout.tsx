"use client";
import { Container, Box, Typography, Paper, Breadcrumbs, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: any) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #051008 0%, #0A1A12 50%, #051008 100%)",
        pt: { xs: 10, md: 14 },
        pb: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-20%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(circle, rgba(33,103,64,0.12) 0%, rgba(33,103,64,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          left: "-15%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(254,201,9,0.06) 0%, rgba(254,201,9,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Breadcrumbs */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" sx={{ color: "#6A9A7A" }} />
            }
            sx={{ mb: 4 }}
          >
            <Button
              component={Link}
              href="/"
              sx={{
                color: "#B8D9C4",
                textDecoration: "none",
                "&:hover": { color: "#FEC909" },
              }}
            >
              Home
            </Button>
            <Typography sx={{ color: "#FEC909" }}>{title}</Typography>
          </Breadcrumbs>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#FEC909",
              letterSpacing: "4px",
              fontWeight: 700,
              fontSize: "0.8rem",
              background: "linear-gradient(135deg, #FEC909, #FFE082)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ziaur Rahman Foundation
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #FFFFFF, #216740)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#B8D9C4",
              maxWidth: "700px",
              mx: "auto",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
          {lastUpdated && (
            <Typography
              variant="caption"
              sx={{ color: "#6A9A7A", mt: 2, display: "block" }}
            >
              Last Updated: {lastUpdated}
            </Typography>
          )}
        </motion.div>

        {/* Content Card */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "32px",
              background: "rgba(10, 26, 18, 0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(33, 103, 64, 0.3)",
              boxShadow: "0 20px 40px -12px rgba(0,0,0,0.4)",
              transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
              "&:hover": {
                border: "1px solid rgba(254, 201, 9, 0.25)",
                boxShadow: "0 25px 45px -12px rgba(0,0,0,0.5)",
              },
            }}
          >
            {children}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

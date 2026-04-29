// components/Footer.jsx
"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Share,
  Send,
  KeyboardArrowUp,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Foundation", href: "/about" },
    { name: "Our Campaigns", href: "/campaigns" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get Involved", href: "/involve" },
    { name: "Latest News", href: "/news" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-&-conditions" },
    { name: "Return & Refund Policy", href: "/refund-policy" },
    { name: "Donor Bill of Rights", href: "/" },
    { name: "Accessibility Statement", href: "/" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, #051008 0%, #0A1A12 50%, #051008 100%)",
        color: "#C8E0D0",
        pt: 8,
        pb: 4,
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(33, 103, 64, 0.3)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(33, 103, 64, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(254, 201, 9, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "2.5fr 2fr 2fr 3fr",
            },
            gap: 5,
            mb: 4,
          }}
        >
          {/* Logo & Mission Section */}
          <Stack spacing={2.5}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  background:
                    "linear-gradient(135deg, #216740 0%, #FEC909 100%)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transform: "rotate(5deg)",
                  boxShadow: "0 4px 15px rgba(33, 103, 64, 0.3)",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    transform: "rotate(-5deg)",
                  }}
                >
                  Z
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  ZIAUR RAHMAN
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FEC909",
                    letterSpacing: "0.1em",
                    fontSize: "0.7rem",
                  }}
                >
                  FOUNDATION
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: "#B8D9C4",
                lineHeight: 1.7,
                maxWidth: "280px",
                fontSize: "0.875rem",
              }}
            >
              Empowering communities, transforming lives. Honoring the legacy of
              Ziaur Rahman through education, healthcare, and sustainable
              development.
            </Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              {[
                { icon: Facebook, label: "Facebook", color: "#1877f2" },
                { icon: Twitter, label: "Twitter", color: "#1da1f2" },
                { icon: Instagram, label: "Instagram", color: "#e4405f" },
                { icon: YouTube, label: "YouTube", color: "#ff0000" },
                { icon: LinkedIn, label: "LinkedIn", color: "#0a66c2" },
              ].map(({ icon: Icon, label, color }) => (
                <IconButton
                  key={label}
                  size="small"
                  component="a"
                  href="#"
                  sx={{
                    border: "1px solid rgba(33, 103, 64, 0.4)",
                    borderRadius: "12px",
                    color: "#B8D9C4",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#FEC909",
                      backgroundColor: "rgba(254, 201, 9, 0.1)",
                      color: "#FEC909",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Stack>

          {/* Quick Links */}
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: "white",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: "linear-gradient(90deg, #FEC909, #216740)",
                  borderRadius: "2px",
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "#B8D9C4",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": {
                      color: "#FEC909",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  • {link.name}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Legal & Policies */}
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: "white",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: "linear-gradient(90deg, #FEC909, #216740)",
                  borderRadius: "2px",
                },
              }}
            >
              Legal & Policies
            </Typography>
            <Stack spacing={1.5}>
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: "#B8D9C4",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": {
                      color: "#FEC909",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  ✓ {link.name}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Newsletter */}
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: "white",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  background: "linear-gradient(90deg, #FEC909, #216740)",
                  borderRadius: "2px",
                },
              }}
            >
              Stay Updated
            </Typography>
            <Stack spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "#B8D9C4",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                Subscribe to receive updates about our impact, campaigns, and
                ways to get involved.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{ display: "flex", gap: 1 }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(33, 103, 64, 0.1)",
                      color: "#C8E0D0",
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "rgba(33, 103, 64, 0.4)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FEC909",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#216740",
                      },
                    },
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: "#6A9A7A",
                      opacity: 1,
                    },
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    background:
                      "linear-gradient(135deg, #216740 0%, #1A4F32 100%)",
                    color: "white",
                    borderRadius: "12px",
                    p: 1.5,
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #FEC909 0%, #D4A800 100%)",
                      color: "#1A1A1A",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Send fontSize="small" />
                </IconButton>
              </Box>

              <Typography
                variant="caption"
                sx={{ color: "#6A9A7A", fontSize: "0.7rem" }}
              >
                We respect your privacy. Unsubscribe anytime.
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            my: 3,
            background:
              "linear-gradient(90deg, transparent, #216740, #FEC909, #216740, transparent)",
            height: 1,
          }}
        />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#6A9A7A",
              textAlign: { xs: "center", md: "left" },
              fontSize: "0.75rem",
            }}
          >
            © {new Date().getFullYear()} Ziaur Rahman Foundation | Honoring a
            Legacy of Leadership & Service
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              background: "rgba(33, 103, 64, 0.2)",
              color: "#FEC909",
              border: "1px solid rgba(254, 201, 9, 0.3)",
              "&:hover": {
                background: "#216740",
                color: "#FEC909",
                transform: "translateY(-3px)",
              },
            }}
            size="small"
          >
            <KeyboardArrowUp />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

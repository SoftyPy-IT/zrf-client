"use client";
import LegalLayout from "@/components/LegalLayout";
import {
  Box,
  Chip,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import {
  Database,
  Eye,
  FileText,
  Fingerprint,
  Heart,
  Lock,
  Server,
  Shield
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="At Ziaur Rahman Foundation, your privacy is sacred. We protect your data with the same dedication we serve our communities."
      lastUpdated="April 15, 2026"
    >
      <Box sx={{ mb: 5 }}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item>
            <Chip
              label="GDPR Compliant"
              icon={<Shield size={16} />}
              sx={{
                bgcolor: "rgba(33, 103, 64, 0.2)",
                color: "#216740",
                border: "1px solid rgba(33,103,64,0.3)",
                fontWeight: 500,
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label="CCPA Compliant"
              icon={<Fingerprint size={16} />}
              sx={{
                bgcolor: "rgba(254, 201, 9, 0.1)",
                color: "#FEC909",
                border: "1px solid rgba(254,201,9,0.3)",
                fontWeight: 500,
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label="PCI DSS Certified"
              icon={<Lock size={16} />}
              sx={{
                bgcolor: "rgba(33, 103, 64, 0.15)",
                color: "#B8D9C4",
                border: "1px solid rgba(33,103,64,0.2)",
                fontWeight: 500,
              }}
            />
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          paragraph
          sx={{ color: "#C8E0D0", lineHeight: 1.8, fontSize: "1rem" }}
        >
          The{" "}
          <strong style={{ color: "#FEC909" }}>Ziaur Rahman Foundation</strong>{" "}
          (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website, donate to our cause, or
          interact with our programs. We honor the legacy of{" "}
          <strong style={{ color: "#FEC909" }}>Ziaur Rahman</strong> by
          operating with transparency, integrity, and respect for every
          individual&apos;s privacy rights.
        </Typography>
      </Box>

      {/* Information Collection Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Database size={24} color="#FEC909" />
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#ffffff" }}>
            Information We Collect
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#B8D9C4",
            pl: { xs: 0, md: 4.5 },
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          To fulfill our mission effectively, we may collect the following types
          of information:
        </Typography>
        <Grid container spacing={2} sx={{ pl: { xs: 0, md: 4.5 }, mb: 2 }}>
          {[
            "Full name and contact information (email, phone, address)",
            "Donation history and transaction details",
            "Communication preferences and feedback",
            "Volunteer application information",
            "Website usage data (analytics, cookies)",
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#B8D9C4",
                  fontSize: "0.9rem",
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "#216740", fontSize: "1.2rem" }}
                >
                  ✓
                </Box>{" "}
                {item}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mt: 2, bgcolor: "rgba(33, 103, 64, 0.3)" }} />
      </Box>

      {/* How We Use Data */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Eye size={24} color="#FEC909" />
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#ffffff" }}>
            How We Use Your Information
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "#B8D9C4", pl: { xs: 0, md: 4.5 }, lineHeight: 1.8 }}
        >
          Your data helps us create meaningful impact. We use your information
          to:
        </Typography>
        <Box sx={{ pl: { xs: 0, md: 4.5 }, mt: 1.5 }}>
          {[
            "Process donations and issue tax receipts",
            "Send impact reports and program updates",
            "Improve our services and donor experience",
            "Comply with legal and regulatory requirements",
            "Protect against fraud and unauthorized transactions",
          ].map((item, idx) => (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                color: "#C8E0D0",
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Heart size={14} color="#216740" /> {item}
            </Typography>
          ))}
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#FEC909",
            pl: { xs: 0, md: 4.5 },
            mt: 2,
            fontStyle: "italic",
          }}
        >
          ⚡ We NEVER sell, rent, or trade your personal information to third
          parties.
        </Typography>
        <Divider sx={{ mt: 3, bgcolor: "rgba(33, 103, 64, 0.3)" }} />
      </Box>

      {/* Data Protection */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Lock size={24} color="#FEC909" />
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#ffffff" }}>
            Data Protection & Security
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "#B8D9C4", pl: { xs: 0, md: 4.5 }, lineHeight: 1.8 }}
        >
          We implement bank-grade security measures to protect your information:
        </Typography>
        <Grid container spacing={2} sx={{ pl: { xs: 0, md: 4.5 }, mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "rgba(33, 103, 64, 0.1)",
                borderRadius: "16px",
              }}
            >
              <Server size={20} color="#FEC909" />
              <Typography variant="subtitle2" sx={{ color: "#fff", mt: 1 }}>
                AES-256 Encryption
              </Typography>
              <Typography variant="caption" sx={{ color: "#6A9A7A" }}>
                Military-grade data encryption
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "rgba(33, 103, 64, 0.1)",
                borderRadius: "16px",
              }}
            >
              <Lock size={20} color="#FEC909" />
              <Typography variant="subtitle2" sx={{ color: "#fff", mt: 1 }}>
                SSL/TLS Protocols
              </Typography>
              <Typography variant="caption" sx={{ color: "#6A9A7A" }}>
                Secure data transmission
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3, bgcolor: "rgba(33, 103, 64, 0.3)" }} />
      </Box>

      {/* Your Rights */}
      <Box
        sx={{
          mt: 4,
          p: 3.5,
          bgcolor: "rgba(33, 103, 64, 0.12)",
          borderRadius: "24px",
          border: "1px solid rgba(33, 103, 64, 0.3)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#FEC909",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Shield size={20} /> Your Privacy Rights
        </Typography>
        <Grid container spacing={2}>
          {[
            "Right to access your data",
            "Right to correct inaccuracies",
            "Right to request deletion",
            "Right to data portability",
            "Right to opt-out of marketing",
            "Right to withdraw consent",
          ].map((right) => (
            <Grid item xs={12} sm={6} key={right}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32, color: "#216740" }}>
                  <FileText size={14} />
                </ListItemIcon>
                <ListItemText
                  primary={right}
                  primaryTypographyProps={{
                    sx: {
                      color: "#C8E0D0",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid rgba(33,103,64,0.3)" }}>
          <Typography variant="body2" sx={{ color: "#6A9A7A" }}>
            To exercise these rights, contact our Data Protection Officer:
          </Typography>
          <Typography variant="body2" sx={{ color: "#FEC909", mt: 1 }}>
            📧 privacy@ziaurrahmanfoundation.org
            <br />
            📞 +880 (2) 1234 5678
          </Typography>
        </Box>
      </Box>
    </LegalLayout>
  );
}
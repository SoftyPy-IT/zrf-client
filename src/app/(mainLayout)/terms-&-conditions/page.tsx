"use client";
import LegalLayout from "@/components/LegalLayout";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  Alert,
} from "@mui/material";
import {
  Gavel,
  Scale,
  HeartHandshake,
  Smartphone,
  AlertTriangle,
  FileText,
  Users,
  Globe2,
  Award,
  CheckCircle,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Together, we honor the legacy of Ziaur Rahman by building a just, compassionate, and empowered society. These terms guide our shared journey."
      lastUpdated="April 15, 2026"
    >
      <Alert
        severity="info"
        icon={<HeartHandshake size={20} />}
        sx={{
          bgcolor: "rgba(33, 103, 64, 0.15)",
          color: "#C8E0D0",
          borderRadius: "20px",
          mb: 4,
          border: "1px solid rgba(33, 103, 64, 0.3)",
          "& .MuiAlert-icon": { color: "#FEC909" },
        }}
      >
        By accessing the Ziaur Rahman Foundation website, you agree to these
        Terms & Conditions. We encourage you to read them carefully.
      </Alert>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {[
          {
            icon: <Gavel size={28} />,
            title: "Acceptance of Terms",
            desc: "By using our website, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy.",
          },
          {
            icon: <HeartHandshake size={28} />,
            title: "Donations & Contributions",
            desc: "All donations are processed securely. We provide tax-deductible receipts for eligible contributions. Donations are generally non-refundable except for processing errors.",
          },
          {
            icon: <Scale size={28} />,
            title: "User Conduct",
            desc: "You agree to use our website respectfully and lawfully. Harassment, fraud, or misuse of our services will result in immediate termination of access.",
          },
          {
            icon: <Users size={28} />,
            title: "Community Guidelines",
            desc: "We foster a respectful community. Hate speech, discrimination, or harmful behavior violates our core values and will not be tolerated.",
          },
        ].map((card, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card
              sx={{
                bgcolor: "rgba(10, 26, 18, 0.6)",
                backdropFilter: "blur(10px)",
                borderRadius: "24px",
                border: "1px solid rgba(33, 103, 64, 0.3)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "#FEC909",
                },
              }}
            >
              <CardContent>
                <Box sx={{ color: "#FEC909", mb: 2 }}>{card.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: 700, mb: 1.5 }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#B8D9C4", lineHeight: 1.6 }}
                >
                  {card.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3, bgcolor: "rgba(33, 103, 64, 0.3)" }} />

      {/* Intellectual Property */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Award size={24} color="#FEC909" /> Intellectual Property
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#C8E0D0", lineHeight: 1.8, mb: 2 }}
        >
          All content on this website — including but not limited to text,
          graphics, logos, images, videos, and the name &quot;Ziaur Rahman
          Foundation&quot; — is the exclusive property of the foundation and is
          protected by Bangladesh and international copyright laws.
        </Typography>
        <Typography variant="body2" sx={{ color: "#6A9A7A" }}>
          You may not reproduce, distribute, modify, or create derivative works
          without explicit written permission.
        </Typography>
      </Box>

      {/* Limitation of Liability */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <AlertTriangle size={24} color="#FEC909" /> Limitation of Liability
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#C8E0D0", lineHeight: 1.8, mb: 2 }}
        >
          To the maximum extent permitted by law, the Ziaur Rahman Foundation
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of our
          services, including but not limited to donation processing delays,
          technical errors, or third-party payment processor issues.
        </Typography>
      </Box>

      {/* Governing Law */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Chip
          label="Governing Law: Laws of Bangladesh"
          icon={<FileText size={16} />}
          sx={{
            bgcolor: "rgba(33, 103, 64, 0.2)",
            color: "#216740",
            border: "1px solid rgba(33,103,64,0.3)",
            py: 2,
            height: "auto",
          }}
        />
        <Chip
          label="Dispute Resolution: Mediation First"
          icon={<Gavel size={16} />}
          sx={{
            bgcolor: "rgba(254, 201, 9, 0.1)",
            color: "#FEC909",
            border: "1px solid rgba(254,201,9,0.3)",
            py: 2,
            height: "auto",
          }}
        />
        <Chip
          label="Effective Date: April 15, 2026"
          icon={<CheckCircle size={16} />}
          sx={{
            bgcolor: "rgba(33, 103, 64, 0.15)",
            color: "#B8D9C4",
            border: "1px solid rgba(33,103,64,0.2)",
            py: 2,
            height: "auto",
          }}
        />
      </Box>
    </LegalLayout>
  );
}
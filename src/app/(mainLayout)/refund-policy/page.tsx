// app/return-policy/page.jsx
"use client";
import LegalLayout from "@/components/LegalLayout";
import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Alert,
  Chip,
  Grid,
  LinearProgress,
} from "@mui/material";
import {
  CalendarClock,
  Clock,
  CreditCard,
  RefreshCw,
  MailCheck,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  HelpCircle,
  Heart,
} from "lucide-react";

const steps = [
  "Submit Request",
  "Review (48 Hours)",
  "Verification",
  "Refund Processed",
];

export default function ReturnPolicy() {
  return (
    <LegalLayout
      title="Return & Refund Policy"
      subtitle="Ziaur Rahman Foundation operates with 100% financial transparency. We honor every donor's trust with a fair, compassionate refund process."
      lastUpdated="April 15, 2026"
    >
      <Alert
        icon={<Heart size={20} />}
        sx={{
          bgcolor: "rgba(33, 103, 64, 0.2)",
          color: "#C8E0D0",
          borderRadius: "20px",
          mb: 4,
          border: "1px solid rgba(33, 103, 64, 0.4)",
          "& .MuiAlert-icon": { color: "#FEC909" },
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          <strong style={{ color: "#FEC909" }}>Our Promise:</strong> We process
          refunds fairly and quickly. No hidden fees, no restocking charges, no
          complicated forms.
        </Typography>
      </Alert>

      {/* Refund Process Stepper */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <RefreshCw size={26} color="#FEC909" /> Our 4-Step Refund Process
        </Typography>
        <Stepper
          alternativeLabel
          activeStep={1}
          sx={{
            "& .MuiStepLabel-label": {
              color: "#B8D9C4",
              mt: 1,
              fontWeight: 500,
            },
            "& .MuiStepIcon-root": {
              color: "#1A3A2A",
              fontSize: "2rem",
              "&.Mui-active": { color: "#FEC909" },
              "&.Mui-completed": { color: "#216740" },
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Eligibility & Timeline Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              bgcolor: "rgba(33, 103, 64, 0.1)",
              borderRadius: "24px",
              border: "1px solid rgba(33, 103, 64, 0.3)",
              height: "100%",
            }}
          >
            <CalendarClock size={26} color="#FEC909" />
            <Typography
              variant="h6"
              sx={{ color: "#fff", mt: 1.5, mb: 1.5, fontWeight: 700 }}
            >
              Refund Eligibility
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#C8E0D0", mb: 1.5, lineHeight: 1.7 }}
            >
              You may request a refund within{" "}
              <strong style={{ color: "#FEC909", fontSize: "1.2rem" }}>
                14 calendar days
              </strong>{" "}
              of your donation date.
            </Typography>
            <Typography variant="body2" sx={{ color: "#6A9A7A" }}>
              ⚡ <strong>Exceptions processed anytime:</strong> Duplicate
              transactions, technical errors, unauthorized charges, or donations
              made under duress.
            </Typography>
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                mt: 2,
                height: 6,
                borderRadius: 3,
                bgcolor: "rgba(33,103,64,0.2)",
                "& .MuiLinearProgress-bar": { bgcolor: "#FEC909" },
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "#6A9A7A", mt: 1, display: "block" }}
            >
              Standard processing: 5-10 business days
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              bgcolor: "rgba(254, 201, 9, 0.05)",
              borderRadius: "24px",
              border: "1px solid rgba(254, 201, 9, 0.2)",
              height: "100%",
            }}
          >
            <DollarSign size={26} color="#FEC909" />
            <Typography
              variant="h6"
              sx={{ color: "#fff", mt: 1.5, mb: 1.5, fontWeight: 700 }}
            >
              Non-Refundable Items
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#C8E0D0", lineHeight: 1.7 }}
            >
              The following are generally non-refundable:
            </Typography>
            <Box sx={{ mt: 1.5 }}>
              {[
                "Membership fees after 30 days",
                "Event tickets after event date",
                "Recurring donations after 1st charge",
                "In-kind donations (goods/services)",
              ].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    color: "#B8D9C4",
                    mb: 0.75,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <span style={{ color: "#FEC909" }}>•</span> {item}
                </Typography>
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{ color: "#6A9A7A", mt: 1, display: "block" }}
            >
              We review each case compassionately — contact us for exceptions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* How to Request Refund */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mb: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "rgba(33, 103, 64, 0.08)",
            borderRadius: "24px",
            border: "1px solid rgba(33, 103, 64, 0.2)",
          }}
        >
          <MailCheck size={24} color="#FEC909" />
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", mt: 1.5, mb: 1, fontWeight: 600 }}
          >
            Email Your Request
          </Typography>
          <Typography variant="body2" sx={{ color: "#B8D9C4" }}>
            Send to{" "}
            <strong style={{ color: "#FEC909" }}>
              finance@ziaurrahmanfoundation.org
            </strong>{" "}
            with:
          </Typography>
          <Box
            component="ul"
            sx={{ color: "#B8D9C4", mt: 1, pl: 2, fontSize: "0.85rem" }}
          >
            <li>Donation receipt/proof</li>
            <li>Date and amount of donation</li>
            <li>Reason for refund request</li>
            <li>Your contact information</li>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "rgba(254, 201, 9, 0.05)",
            borderRadius: "24px",
            border: "1px solid rgba(254, 201, 9, 0.15)",
          }}
        >
          <CreditCard size={24} color="#FEC909" />
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", mt: 1.5, mb: 1, fontWeight: 600 }}
          >
            Refund Method & Timeline
          </Typography>
          <Typography variant="body2" sx={{ color: "#B8D9C4" }}>
            Refunds are issued to the original payment method:
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Typography variant="body2" sx={{ color: "#C8E0D0" }}>
              💳 Credit/Debit Cards: 5-7 business days
            </Typography>
            <Typography variant="body2" sx={{ color: "#C8E0D0" }}>
              🏦 Bank Transfer: 7-10 business days
            </Typography>
            <Typography variant="body2" sx={{ color: "#C8E0D0" }}>
              📱 Mobile Banking (bKash/Nagad): 3-5 business days
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Guarantee Banner */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Chip
          label="✅ 100% Donor Satisfaction Guarantee | ✅ No Restocking Fees | ✅ 24/7 Donor Support"
          icon={<CheckCircle size={16} />}
          sx={{
            bgcolor: "rgba(33, 103, 64, 0.2)",
            color: "#C8E0D0",
            border: "1px solid rgba(33, 103, 64, 0.4)",
            py: 2.5,
            px: 2,
            height: "auto",
            "& .MuiChip-label": { fontSize: "0.85rem", fontWeight: 500 },
          }}
        />
      </Box>

      {/* Support Contact */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "rgba(254, 201, 9, 0.05)",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <HelpCircle
          size={20}
          color="#FEC909"
          style={{
            display: "inline",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#C8E0D0", display: "inline" }}
        >
          Still have questions? Our donor relations team is here for you —
          <strong style={{ color: "#FEC909", marginLeft: "5px" }}>
            {" "}
            +880 (2) 1234 5678
          </strong>{" "}
          or
          <strong style={{ color: "#FEC909", marginLeft: "5px" }}>
            {" "}
            donorsupport@ziaurrahmanfoundation.org
          </strong>
        </Typography>
      </Box>
    </LegalLayout>
  );
}

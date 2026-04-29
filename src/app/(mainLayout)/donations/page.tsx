"use client";

import { countryList } from "@/constant/country";
import { useLanguage } from "@/provider/LanguageProvider";
import {
  Alert,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Typography,
  Button,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DonationHeader from "@/components/Donation/DonationHeader";
import DonationForm from "@/components/forms/DonationForm";
import TestimonialsSection from "@/components/Donation/TestimonialsSection";
import PartnerSection from "@/components/Donation/PartnerSection";


const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5001/api/v1";

const DonationPage = () => {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
  });

  const [certifyInfo, setCertifyInfo] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<{
    type: "success" | "fail" | "cancel" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const status = searchParams.get("status");
    const tran_id = searchParams.get("tran_id");
    const amount = searchParams.get("amount");
    const error = searchParams.get("error");

    if (status === "success") {
      setPaymentStatus({
        type: "success",
        message: `Thank you! Your donation of ৳${amount} has been successfully processed. Transaction ID: ${tran_id}`,
      });
      setOpenThankYou(true);
      router.replace("/donate", { scroll: false });
    } else if (status === "fail") {
      setPaymentStatus({
        type: "fail",
        message: `Payment failed. Please try again. ${error ? `Error: ${error}` : ""}`,
      });
      setSnackbarMessage("Payment failed. Please try again.");
      setOpenSnackbar(true);
      router.replace("/donate", { scroll: false });
    } else if (status === "cancel") {
      setPaymentStatus({
        type: "cancel",
        message: "Payment was cancelled. You can try again whenever you're ready.",
      });
      setSnackbarMessage("Payment was cancelled. You can try again.");
      setOpenSnackbar(true);
      router.replace("/donate", { scroll: false });
    }
  }, [searchParams, router]);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getTotalAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (event: any) => {
    const country = countryList.find((c) => c.code === event.target.value);
    if (country) {
      setSelectedCountry(country);
      setMobileNumber("");
      setWhatsappNumber("");
    }
  };

  const validatePhoneNumber = (number: string, pattern: RegExp): boolean => {
    if (!number.trim()) return false;
    return pattern.test(number);
  };

  const validateForm = () => {
    if (getTotalAmount() <= 0) {
      setSnackbarMessage("Please select or enter a donation amount");
      setOpenSnackbar(true);
      return false;
    }

    if (getTotalAmount() < 10) {
      setSnackbarMessage("Minimum donation amount is 10 BDT");
      setOpenSnackbar(true);
      return false;
    }

    if (getTotalAmount() > 500000) {
      setSnackbarMessage("Maximum donation amount is 500,000 BDT");
      setOpenSnackbar(true);
      return false;
    }

    if (!donorInfo.fullName.trim()) {
      setSnackbarMessage("Please enter your full name");
      setOpenSnackbar(true);
      return false;
    }

    if (!donorInfo.email.trim()) {
      setSnackbarMessage("Please enter your email address");
      setOpenSnackbar(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorInfo.email)) {
      setSnackbarMessage("Please enter a valid email address");
      setOpenSnackbar(true);
      return false;
    }

    if (!mobileNumber.trim()) {
      setSnackbarMessage("Please enter your mobile number");
      setOpenSnackbar(true);
      return false;
    }

    if (!validatePhoneNumber(mobileNumber, selectedCountry.pattern)) {
      setSnackbarMessage(
        `Please enter a valid ${selectedCountry.name} mobile number. Example: ${selectedCountry.example}`,
      );
      setOpenSnackbar(true);
      return false;
    }

    if (whatsappNumber && !validatePhoneNumber(whatsappNumber, selectedCountry.pattern)) {
      setSnackbarMessage(
        `Please enter a valid ${selectedCountry.name} WhatsApp number. Example: ${selectedCountry.example}`,
      );
      setOpenSnackbar(true);
      return false;
    }

    if (!certifyInfo) {
      setSnackbarMessage("Please certify that the information provided is correct");
      setOpenSnackbar(true);
      return false;
    }

    if (!agreePolicy) {
      setSnackbarMessage("Please agree to the Privacy Policy");
      setOpenSnackbar(true);
      return false;
    }

    if (!agreeTerms) {
      setSnackbarMessage("Please agree to the Terms & Conditions");
      setOpenSnackbar(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const fullPhoneNumber = `${selectedCountry.code}${mobileNumber}`;
      const fullWhatsapp = whatsappNumber ? `${selectedCountry.code}${whatsappNumber}` : "";

      const response = await fetch(`${API_BASE_URL}/donations/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: donorInfo.fullName,
          email: donorInfo.email,
          phone: fullPhoneNumber,
          amount: getTotalAmount(),
          whatsappNumber: fullWhatsapp,
          country: selectedCountry.name,
          countryCode: selectedCountry.code,
          certifyInfo: certifyInfo,
          agreePolicy: agreePolicy,
          agreeTerms: agreeTerms,
        }),
      });

      const data = await response.json();

      if (data.success && data.data?.GatewayPageURL) {
        window.location.href = data.data.GatewayPageURL;
      } else {
        throw new Error(data.message || "Payment initialization failed");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      setSnackbarMessage(error.message || "Failed to initialize payment. Please try again.");
      setOpenSnackbar(true);
      setIsProcessing(false);
    }
  };

  const allCheckboxesChecked = certifyInfo && agreePolicy && agreeTerms;

  return (
    <>
      <Box
        sx={{
          margin: "50px 0",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <DonationHeader language={language} />

          {paymentStatus.type === "success" && (
            <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
              {paymentStatus.message}
            </Alert>
          )}

          <DonationForm
            language={language}
            onSubmit={handleSubmit}
            isProcessing={isProcessing}
            allCheckboxesChecked={allCheckboxesChecked}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            whatsappNumber={whatsappNumber}
            setWhatsappNumber={setWhatsappNumber}
            donorInfo={donorInfo}
            handleDonorInfoChange={handleDonorInfoChange}
            certifyInfo={certifyInfo}
            setCertifyInfo={setCertifyInfo}
            agreePolicy={agreePolicy}
            setAgreePolicy={setAgreePolicy}
            agreeTerms={agreeTerms}
            setAgreeTerms={setAgreeTerms}
            customAmount={customAmount}
            handleCustomAmountChange={handleCustomAmountChange}
            getTotalAmount={getTotalAmount}
            handleCountryChange={handleCountryChange}
          />

          <TestimonialsSection language={language} />
          <PartnerSection language={language} />
        </Container>
      </Box>

      {/* Thank You Dialog */}
      <Dialog open={openThankYou} onClose={() => setOpenThankYou(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center", pt: 4 }}>
          <CheckCircle sx={{ fontSize: 80, color: "#216740" }} />
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {paymentStatus.message ||
              "Your generous donation will help us make a difference in the lives of many. A confirmation email has been sent to your inbox."}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpenThankYou(false)}
            sx={{ bgcolor: "#216740", "&:hover": { bgcolor: "#1a5533" } }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={paymentStatus.type === "fail" ? "error" : "warning"} sx={{ width: "100%" }}>
          {snackbarMessage || paymentStatus.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DonationPage;
"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { toast } from "sonner";
import { isValidPhoneNumber } from "libphonenumber-js";
import { FieldValues } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import bkash from "../../../../src/assets/images/payment/bkas.png";
import nagad from "../../../../src/assets/images/payment/nagad.png";
import rocket from "../../../../src/assets/images/payment/rocket.png";
import visa from "../../../../src/assets/images/payment/visa.png";
import "react-international-phone/style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ZRFInput from "@/components/Forms/Input";
import Container from "../Container";
import ZRFForm from "@/components/Forms/Form";

import "./Header.css";
import { useLanguage } from "@/provider/LanguageProvider";



const DonateForm = ({ onClose }: { onClose: () => void }) => {
  const { language } = useLanguage()
  const steps = language === 'ENG'
    ? ["Give Your Information", "Donation "]
    : ["আপনার তথ্য দিন", "সহযোগিতা"];
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const router = useRouter();
  const handleVerifyPhone = () => {
    if (isValidPhoneNumber(phone, "BD")) {
      setIsPhoneValid(true);
      toast.success("Phone number is valid");
    } else {
      setIsPhoneValid(false);
      toast.error("Invalid phone number");
    }
  };

  const handleSubmit = async (data: FieldValues) => {
    if (!isPhoneValid) {
      toast.error("Please verify your phone number");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/donation`,
        { ...data, phone }
      );
      if (res.status === 200 || res.status === 201) {
        toast.success("Donation pay successfully!", {
          id: 'success-toast',
          duration: 1000,
        });
        router.push("/");
        onClose()
      }
    } catch (err) {
      toast.error("Something went wrong!!!");
      console.error(err);
    }
  };


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const buttonStyle = {
    width: "45px",
    height: "50px",
    fontSize: "12px",
    padding: "0px",
    backgroundImage: "linear-gradient(to right, #216740, #FEC909)",
    color: "white",
    borderRadius: "5px",
    textTransform: "none",
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #1E5D36, #C6A90B)",
    },

  };

  return (
    <>
      <Container>
        <Box bgcolor="white" borderRadius="5px">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <ZRFForm
            onSubmit={async (values) => {
              if (isLastStep) {
                await handleSubmit(values);
              } else {
                handleNext();
              }
            }}
          >
            {activeStep === 0 && (
              <>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <ZRFInput
                      name="name"
                      label={language === 'ENG' ? 'Name' : 'নাম'}
                      size="medium"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <PhoneInput
                        defaultCountry="bd"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        name='phone'
                        placeholder={language === 'ENG' ? 'Phone' : 'ফোন'}
                      />
                      <Button
                        sx={buttonStyle}
                        variant="contained"
                        onClick={handleVerifyPhone}
                      >
                        {language === 'ENG' ? 'Verify' : 'যাচাই করুন'}
                      </Button>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <ZRFInput
                      name="email"
                      label={language === 'ENG' ? 'Email' : 'ইমেইল'}
                      size="medium"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ZRFInput
                      name="amount"
                      label={language === 'ENG' ? 'Amount' : 'পরিমাণ'}
                      size="medium"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Box marginTop="10px">
                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <Typography>
                      {language === 'ENG' ? 'I certify that above provided information is correct.' : 'আমি প্রত্যয়িত করছি যে উপরে প্রদত্ত তথ্য সঠিক।'}

                    </Typography>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <Typography>
                      {language === 'ENG' ? 'I do hereby declare that the contributions are from my personal fund and also I agree to all policy of ZRF.' : 'আমি এতদ্বারা ঘোষণা করছি যে অবদানগুলি আমার থেকে ব্যক্তিগত তহবিল এবং আমি ZRF এর সমস্ত নীতিতে সম্মত।'}

                    </Typography>
                  </div>
                </Box>
              </>
            )}
            {activeStep === 1 && (
              <Box >
                <Typography marginBottom="20px" variant="h6">
                  {language === 'ENG' ? 'Select Payment Method' : 'পেমেন্ট পদ্ধতি নির্বাচন করুন'}
                </Typography>
                <Box
                  marginTop="20px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <div className="paymentWrap">
                    <Image src={bkash} alt="payment" width={300} height={200} />
                  </div>
                  <div className="paymentWrap">
                    <Image src={nagad} alt="payment" width={300} height={200} />
                  </div>
                </Box>
                <Box
                
                  marginTop="20px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <div className="paymentWrap">
                    <Image
                      src={rocket}
                      alt="payment"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="paymentWrap">
                    <Image src={visa} alt="payment" width={300} height={200} />
                  </div>
                </Box>
              </Box>
            )}

            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                {language === 'ENG' ? 'Back' : 'পূর্ববর্তী'}
              </Button>

              <Button type="submit">
                {isLastStep
                  ? language === 'ENG'
                    ? 'Submit'
                    : 'জমা দিন'
                  : language === 'ENG'
                    ? 'Next'
                    : 'পরবর্তী'}
              </Button>
            </Box>
          </ZRFForm>
        </Box>
      </Container>
    </>
  );
};

export default DonateForm;

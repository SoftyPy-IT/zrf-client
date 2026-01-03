/* eslint-disable react/no-unescaped-entities */
"use client";

import { Box, Container, Typography, Divider, Paper } from "@mui/material";
import Image from "next/image";
import mourning from "../../../assets/images/mourning/zia.jpeg";
import { useLanguage } from "@/provider/LanguageProvider";
import logo from "../../../../src/assets/images/logo/logo.svg";
export default function MourningCard() {
  const { language } = useLanguage();
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
      }}
    >
      <Box textAlign="center" width="100%">
        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            letterSpacing: { xs: "0.1em", sm: "0.12em", md: "0.15em" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 700,
            textAlign: { xs: "center", md: "left" },
            textAlignLast: "center",
          }}
        >
          {language === "ENG" ? "Condolence Message" : "শোকবার্তা"}
        </Typography>

        <Divider
          sx={{ width: 80, mx: "auto", mb: 6, borderColor: "text.primary" }}
        />

        <Box
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: 3,
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 8 },
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 26, sm: 32, md: 38 },
              fontWeight: 700,
              mb: 2,
              fontFamily: "serif",
            }}
          >
            إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              opacity: 0.85,
              display: "block",
              mb: 5,
              fontSize: { xs: 16, md: 18 },
            }}
          >
            {language === "ENG"
              ? "Indeed, we belong to Allah, and to Him we shall return."
              : "নিশ্চয়ই আমরা আল্লাহর এবং নিশ্চয়ই আমরা তাঁরই কাছে ফিরে যাব"}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
            <Image
              src={mourning}
              alt="Begum Khaleda Zia"
              width={300}
              height={180}
              style={{ filter: "grayscale(100%)", opacity: 0.85 }}
            />
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 4 }} />

          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20, md: 22 },
              lineHeight: 2,
              opacity: 0.95,
              mb: 4,
            }}
          >
            {language === "ENG" ? (
              <>
                It is with profound grief and sorrow that we announce the
                passing of the Chairperson of the Bangladesh Nationalist Party
                (BNP), former Prime Minister, and Deshnetri Begum Khaleda Zia.
                <br />
                <br />
                She passed away today,{" "}
                <strong>Tuesday, 30 December 2025</strong>, at{" "}
                <strong>6:00 AM</strong>.
              </>
            ) : (
              <>
                গভীর শোকের সঙ্গে জানাচ্ছি যে, বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র
                চেয়ারপার্সন, সাবেক প্রধানমন্ত্রী, দেশনেত্রী বেগম খালেদা জিয়া
                আজ ৩০ ডিসেম্বর ২০২৫ (মঙ্গলবার) সকাল ৬:০০ টায় ইন্তেকাল করেছেন।
              </>
            )}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#fff",
              color: "#000",
              borderRadius: 2,
              px: { xs: 4, md: 6 },
              py: 3,
              fontSize: { xs: 15, md: 17 },
              lineHeight: 2,
              mb: 5,
            }}
          >
            {language === "ENG"
              ? "We mourn this great loss with deep grief and respect. We pray that Almighty Allah grants forgiveness to her departed soul and bestows upon her the highest place in Jannatul Ferdous. We humbly request prayers from the people of the nation and all well wishers for the eternal peace of her soul."
              : "গভীর শোক ও শ্রদ্ধায় তাঁর বিদেহী আত্মার মাগফিরাত কামনা করছি এবং দেশবাসীসহ সকলের নিকট দোয়া প্রার্থনা করছি।"}
          </Paper>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              opacity: 0.75,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              style={{ borderRadius: "50%", border: "4px solid #22c55e" }}
            />
            <Typography variant="subtitle2" sx={{ m: 0 }}>
              {language === "ENG"
                ? "Ziaur Rahman Foundation"
                : "জিয়াউর রহমান ফাউন্ডেশন"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

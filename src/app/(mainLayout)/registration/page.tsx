"use client";

import Link from "next/link";
import { Container, Fade, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLanguage } from "@/provider/LanguageProvider";

export default function RegistrationPage() {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-[#0c1f1c] relative overflow-hidden py-16 px-4">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2E8B57]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FEC909]/5 rounded-full blur-[90px] pointer-events-none" />

      <Container maxWidth="sm" className="relative z-10 text-center">
        <Fade in timeout={700}>
          <div className="bg-[#132620]/90 backdrop-blur-md border border-[#2E8B57]/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/40">
            {/* Lock Icon */}
            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FEC909]/10 border border-[#FEC909]/30 flex items-center justify-center text-[#FEC909] mb-6 shadow-inner">
              <LockOutlinedIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
            </div>

            {/* Overline Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#FEC909]/10 border border-[#FEC909]/30 text-[#FEC909] text-xs font-bold uppercase tracking-wider mb-4">
              ZRF Science Fair 2026
            </div>

            {/* Heading */}
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#F4FAF6",
                fontSize: { xs: "1.65rem", sm: "2.15rem" },
                lineHeight: 1.25,
                mb: 2,
              }}
            >
              {isBn ? "নিবন্ধন কার্যক্রম সমাপ্ত" : "Registration is Closed"}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "#C8E0D0",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.65,
                maxWidth: 440,
                mx: "auto",
                mb: 4,
              }}
            >
              {isBn
                ? "জিয়াউর রহমান ফাউন্ডেশন বিজ্ঞান মেলা ২০২৬-এর অনলাইন নিবন্ধন কার্যক্রম সমাপ্ত হয়েছে। আগ্রহের জন্য আন্তরিক ধন্যবাদ।"
                : "Online registration for the ZRF Science Fair 2026 is officially closed. Thank you for your interest and support."}
            </Typography>

            {/* Back to Home Button */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#216740] to-[#2E8B57] hover:from-[#1b5534] hover:to-[#257347] text-white font-semibold text-sm shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <ArrowBackIcon sx={{ fontSize: 18 }} />
                <span>{isBn ? "প্রধান পাতায় ফিরুন" : "Back to Home"}</span>
              </Link>
            </div>
          </div>
        </Fade>
      </Container>
    </main>
  );
}

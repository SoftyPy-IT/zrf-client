/* eslint-disable react/no-unescaped-entities */
"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import shok from "../../../../src/assets/images/mourning/Shok1.png";
import { useLanguage } from "@/provider/LanguageProvider";
const MourningHeader = () => {
  const { language } = useLanguage();
  return (
    <>
      <Box
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2500,
          backgroundColor: { md: "#000", xs: "#2c2c2c" },
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Box
          sx={{
            maxWidth: "1500px",
            mx: "auto",
            px: 3,
            py: 1.5,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                bgcolor: { md: "#111", xs: "#2c2c2c" },
                px: { md: "2", xs: "0" },
                py: 0.5,
                borderRadius: 20,
                color: "#fff",
              }}
            >
              {language === "ENG" ? "  Condolence Message" : "গভীর শোকবার্তা"}
            </Typography>

            <Typography
              sx={{
                fontSize: { md: 14, xs: 10 },
                color: "#d1d5db",
              }}
            >
              {language === "ENG" ? (
                <>
                  Deshnetri Begum Khaleda Zia Has
                  <br className="sm:block md:hidden" />
                  Passed Away. Inna Lillahi wa Inna
                  <br className="sm:block md:hidden" />
                  Ilayhi Raji'un.{" "}
                  <a
                    href="/mourning"
                    className="text-[15px] sm:block md:hidden text-blue-600 hover:underline cursor-pointer"
                  >
                    Details...
                  </a>
                </>
              ) : (
                <>
                  দেশনেত্রী বেগম খালেদা জিয়া ইন্তেকাল{" "}
                  <br className="sm:block md:hidden" /> করেছেন। ইন্নালিল্লাহি
                  ওয়া ইন্না ইলাইহি <br className="sm:block md:hidden" /> রাজিঊন।{" "}
                  <a
                    href="/mourning"
                    target="_blank"
                    className="text-lg font-semibold text-blue-600 hover:underline sm:block md:hidden"
                  >
                    বিস্তারিত...
                  </a>
                </>
              )}
            </Typography>
          </Box>

          <div className="relative ">
            <Button
              component={Link}
              href="/mourning"
              sx={{
                color: "#fff",
                backgroundColor: "#111",
                border: "1px solid rgba(255,255,255,0.5)",
                px: 3,
                py: 0.5,
                borderRadius: 20,
                fontSize: 13,
                textTransform: "none",
                display: { md: "flex", xs: "none" },
                alignItems: "center",
                gap: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#222",
                  border: "1px solid rgba(255,255,255,0.8)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                },
              }}
            >
              Details
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Button>

            <div className="mourningArrow">
              {" "}
              <Image alt="shok" src={shok} width={500} height={500} />
              <span className="shokContent">
                {language == "ENG" ? "We Are" : "আমরা"} <br />{" "}
                {language == "ENG" ? "Deeply" : "গভীরভাবে"} <br />{" "}
                {language == "ENG" ? "Mourning" : "শোকাহত"}
              </span>
            </div>
          </div>
        </Box>
      </Box>

      {/* SPACER (IMPORTANT) */}
      <Box sx={{ height: 64 }} />
    </>
  );
};

export default MourningHeader;

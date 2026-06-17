"use client";

import Link from "next/link";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLanguage } from "@/provider/LanguageProvider";
import Container from "../Container";

const TopBar = () => {
    const { language } = useLanguage();

    return (

        <div className="bg-[#216740] border-b border-[#2E8B57]">
            <Container>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-2">

                        {/* Left text */}
                        <div className="flex items-center gap-2 text-white text-sm">
                            <CampaignIcon sx={{ color: "#FEC909", fontSize: 20 }} />

                            <span>
                                {language === "ENG"
                                    ? "Science Fair Registration is Open"
                                    : "বিজ্ঞান মেলা নিবন্ধন শুরু হয়েছে"}
                            </span>
                        </div>

                        {/* Right button */}
                        <Link
                            href="/registration"
                            className="
              bg-[#FEC909]
              hover:bg-[#FFD633]
              text-[#1A1A1A]
              font-semibold
              px-2
              md:px-4
              md:py-1.5
              py-1
              rounded-full
              transition-all
              duration-300
              flex
              items-center
              gap-2
              shadow-md
              md:text-sm
              text-xs
            "
                        >
                            {language === "ENG"
                                ? "Register Now"
                                : "নিবন্ধন করুন"}

                            <ArrowForwardIcon fontSize="small" />
                        </Link>
                    </div>
                </div>
            </Container>
        </div >

    );
};

export default TopBar;
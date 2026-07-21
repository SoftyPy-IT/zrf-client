"use client";

import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/provider/LanguageProvider";
import Container from "../Container";
import topbarBanner from "@/assets/images/registration/topbar.jpeg";

const TopBar = () => {
    const { language } = useLanguage();
    const pathname = usePathname();

    // Hide on the registration page
    if (pathname === "/registration") {
        return null;
    }

    return (
        <div className="bg-[#216740] border-b border-[#2E8B57]">
            <Container>
                <div className="px-2 sm:px-4 md:px-8">
                    <div className="flex justify-center py-2">
                        <div className="inline-flex items-center justify-center gap-2 sm:gap-4">
                            {/* Banner */}
                            <Image
                                src={topbarBanner}
                                alt="Top Bar Banner"
                                priority
                                className="
                w-auto
                h-7
                sm:h-8
                md:h-10
                lg:h-12
                max-w-[170px]
                sm:max-w-[230px]
                md:max-w-[320px]
                lg:max-w-[420px]
                object-contain
            "
                            />

                            {/* Register Button */}
                            <Link
                                href="/registration"
                                className="
                shrink-0
                flex items-center gap-1
                rounded-full
                bg-[#FEC909]
                hover:bg-[#FFD633]
                text-[#1A1A1A]
                font-semibold
                text-[10px]
                sm:text-xs
                md:text-sm
                px-2
                sm:px-3
                md:px-4
                py-1
                md:py-1.5
                shadow-md
                transition-all
                duration-300
            "
                            >
                                {language === "ENG"
                                    ? "Register Now"
                                    : "নিবন্ধন করুন"}

                                <ArrowForwardIcon
                                    sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
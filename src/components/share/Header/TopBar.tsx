"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="w-full bg-gradient-to-r from-[#041220] via-[#08223D] to-[#041220] border-b border-[#0f3458]/60 shadow-sm relative z-30">
      <Container className="max-w-[1440px] px-2 sm:px-4">
        <div className="flex justify-center items-center py-1.5 sm:py-2">
          <Link
            href="/registration"
            className="block w-full max-w-[1360px] group rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(254,201,9,0.3)] transition-all duration-300 transform hover:scale-[1.003]"
          >
            <Image
              src={topbarBanner}
              alt="ZRF Science Fair 2026 - Registration Banner"
              priority
              className="w-full h-auto object-cover block"
              sizes="(max-width: 1440px) 100vw, 1360px"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
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
        <div className="bg-[#216740] border-b border-[#2E8B57]">
            <Container>
                <div className="px-2 sm:px-4 md:px-8">
                    <div className="flex justify-center py-2">
                        <Link href="/registration" className="block w-full">
                            <Image
                                src={topbarBanner}
                                alt="Top Bar Banner"
                                priority
                                className="w-full h-auto rounded-md cursor-pointer"
                                sizes="100vw"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
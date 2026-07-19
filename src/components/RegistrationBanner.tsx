'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { useLanguage } from '@/provider/LanguageProvider';
import bannerBng from '../../src/assets/images/registration/banner-bn.jpeg'
import bannerEng from '../../src/assets/images/registration/banner-en.jpeg'

interface RegistrationBannerProps {
    className?: string;
    height?: number | string;
}

export default function RegistrationBanner({
    className,
    height = 'auto'
}: RegistrationBannerProps) {
    const { language } = useLanguage();

    const bannerImage = language === 'BNG' ? bannerBng : bannerEng;


    return (
        <Box sx={{ width: '100%' }}>
            <Image
                src={bannerImage}
                alt='Registration Banner'
                priority
                quality={100}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
            />
        </Box>
    );
}
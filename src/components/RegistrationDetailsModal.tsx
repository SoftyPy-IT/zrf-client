'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DetailsDialogProps {
  open: boolean;
  onClose: () => void;
  language?: string;
  imageSrc?: any;
}

const DETAILS_TEXT = `জিয়াউর রহমান ফাউন্ডেশন কর্তৃক আয়োজিত বিজ্ঞান মেলা "ভবিষ্যৎ বিজ্ঞানীর খোঁজে ২০২৬" এ নিবন্ধন চলছে। 

🔰বাংলাদেশের বিশ্ববিদ্যালয় ও মেডিকেল কলেজের শিক্ষার্থী এবং শিক্ষকবৃন্দ অংশগ্রহণ করতে পারবেন।

⏱️নিবন্ধনের শেষ তারিখ : ৩০ সেপ্টেম্বর
⏲️বিভাগীয় পর্ব : ৩০ অক্টোবর

🏅 পুরস্কার
গোল্ড মেডেল
সিলভার মেডেল
ব্রোঞ্জ মেডেল

 ✅বিশেষ নির্দেশনা:

🔴 প্রত্যেক অংশগ্রহণকারীকে নিজস্ব মডেল স্বশরীরে উপস্থাপন করতে হবে
🔴 ধারণাটি সম্পূর্ণ মৌলিক ও অনন্য হতে হবে
🔴পূর্বে উপস্থাপিত কোনো প্রজেক্ট গ্রহণযোগ্য হবে না

গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রী এবং জেডআরএফ-এর প্রেসিডেন্ট জনাব তারেক রহমান (এমপি) এবং জেডআরএফ এর সম্মানিত ভাইস প্রেসিডেন্ট ডা. জুবাইদা রহমান-এর সামনে অংশগ্রহণকারীরা নিজ নিজ প্রজেক্ট উপস্থাপনের সুযোগ পাবেন।

 ✅প্রথম ৫ জন বিজয়ীর জন্য স্টার্টআপে আকর্ষণীয় আর্থিক সহায়তা

🔴 প্রজেক্ট নিবন্ধন ও জমা দেওয়ার নির্দেশনা: 
১।  চিত্রসহ লিখিত ব্যাখ্যা অথবা মডেল ও লিখিত ব্যাখ্যা এবং
২।  চিত্রসহ ভিডিও প্রেজেন্টেশন (সর্বোচ্চ ১৫ মিনিট) অথবা
৩।  পাওয়ারপয়েন্ট প্রেজেন্টেশন (সর্বোচ্চ ১৫ মিনিট) অথবা
৪।  ডকুমেন্টারি (সর্বোচ্চ ১৫ মিনিট) জমা দিতে হবে। 
বিঃ দ্রঃ 
১। একক বা দলগত ভাবে অংশগ্রহণ করার সুযোগ 


গবেষণা • উদ্ভাবন • প্রযুক্তি উন্নয়ন

আয়োজনে :
জিয়াউর রহমান ফাউন্ডেশন`;

export default function RegistrationDetailsModal({
  open,
  onClose,
}: DetailsDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      PaperProps={{
        'data-lenis-prevent': 'true',
        sx: {
          bgcolor: '#0a1a1a',
          color: '#FFFFFF',
          borderRadius: 3,
          border: '1px solid rgba(254, 201, 9, 0.3)',
          maxHeight: '85vh',
          m: { xs: 1.5, sm: 3 },
          overscrollBehavior: 'contain',
        },
      } as any}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          p: { xs: 1.5, sm: 2 },
          pb: 0,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            color: '#FEC909',
            '&:hover': {
              bgcolor: 'rgba(254, 201, 9, 0.1)',
            },
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        data-lenis-prevent="true"
        sx={{
          p: { xs: 2.5, sm: 4 },
          pt: { xs: 1, sm: 1 },
          color: '#F1F5F9',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
        }}
      >
        <Box
          sx={{
            whiteSpace: 'pre-line',
            fontFamily: 'var(--font-noto-sans-bengali), sans-serif',
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            lineHeight: 1.8,
            wordBreak: 'break-word',
          }}
        >
          {DETAILS_TEXT}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
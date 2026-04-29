"use client";

import ZRFForm from '@/components/Forms/Form';
import ZRFInput from '@/components/Forms/Input';
import { useLanguage } from '@/provider/LanguageProvider';
import { Button, Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const MembershipForm = ({ onClose }: { onClose: () => void }) => {
    const { language } = useLanguage();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/membership`, data);
            toast.success(
                language === 'ENG'
                    ? 'Welcome to ZRF family! Your membership request has been submitted successfully.'
                    : 'ZRF পরিবারে স্বাগতম! আপনার সদস্যপদের অনুরোধ সফলভাবে জমা দেওয়া হয়েছে।',
                { duration: 3000 }
            );
            router.push('/');
            setTimeout(() => onClose(), 1000);
        } catch (error) {
            toast.error(
                language === 'ENG'
                    ? 'Something went wrong. Please try again.'
                    : 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Paper
            elevation={3}
            sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: '16px',
                backgroundColor: '#ffffff',
            }}
        >
            {/* Header */}
            <Box textAlign="center" mb={3}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: '#000000',
                        mb: 1,
                    }}
                >
                    {language === 'ENG' ? 'Become a Member' : 'সদস্য হোন'}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#555555',
                        fontSize: '14px',
                    }}
                >
                    {language === 'ENG'
                        ? 'Join Ziaur Rahman Foundation and be a part of our mission.'
                        : 'জিয়াউর রহমান ফাউন্ডেশনে যোগ দিন এবং আমাদের মিশনের অংশ হন।'}
                </Typography>
            </Box>

            <ZRFForm onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ZRFInput
                            name="name"
                            label={language === 'ENG' ? 'Full Name' : 'পূর্ণ নাম'}
                            placeholder={language === 'ENG' ? 'Enter your full name' : 'আপনার পূর্ণ নাম লিখুন'}
                            size="medium"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ZRFInput
                            name="email"
                            label={language === 'ENG' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                            type="email"
                            placeholder={language === 'ENG' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                            size="medium"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ZRFInput
                            name="address"
                            label={language === 'ENG' ? 'Address' : 'ঠিকানা'}
                            placeholder={language === 'ENG' ? 'Enter your address' : 'আপনার ঠিকানা লিখুন'}
                            size="medium"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <ZRFInput
                            name="phone"
                            label={language === 'ENG' ? 'Phone Number' : 'ফোন নম্বর'}
                            placeholder={language === 'ENG' ? 'Enter your phone number' : 'আপনার ফোন নম্বর লিখুন'}
                            size="medium"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12} container justifyContent="center" sx={{ mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            sx={{
                                backgroundColor: '#216740',
                                color: '#ffffff',
                                padding: '10px 32px',
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontSize: '16px',
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: '#1a4f32',
                                },
                                '&:disabled': {
                                    backgroundColor: '#cccccc',
                                },
                            }}
                        >
                            {isSubmitting ? (
                                <CircularProgress size={24} sx={{ color: '#ffffff' }} />
                            ) : (
                                language === 'ENG' ? 'Submit Application' : 'আবেদন জমা দিন'
                            )}
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant="caption"
                            sx={{
                                textAlign: 'center',
                                display: 'block',
                                color: '#888888',
                                fontSize: '11px',
                                mt: 1,
                            }}
                        >
                            {language === 'ENG'
                                ? 'We respect your privacy. Your information is safe with us.'
                                : 'আমরা আপনার গোপনীয়তাকে সম্মান করি। আপনার তথ্য আমাদের কাছে নিরাপদ।'}
                        </Typography>
                    </Grid>
                </Grid>
            </ZRFForm>
        </Paper>
    );
};

export default MembershipForm;
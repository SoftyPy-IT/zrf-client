import ZRFForm from '@/components/Forms/Form';
import ZRFInput from '@/components/Forms/Input';
import { useLanguage } from '@/provider/LanguageProvider';
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const MembershipForm = ({ onClose }: { onClose: () => void }) => {

    const { language } = useLanguage()
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const router = useRouter()
    const handleSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/membership`, data);
            toast.success('Get Membership successfully!', {
                id: 'success-toast',
                duration: 1000,
            });
            router.push('/')
            onClose()
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <ZRFForm onSubmit={handleSubmit}>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="name" label={language === 'ENG' ? 'Name' : 'নাম'} size="medium" fullWidth />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="email" label={language === 'ENG' ? 'Email' : 'ইমেইল'} size="medium" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="address" label={language === 'ENG' ? 'Address' : 'ঠিকানা'} size="medium" fullWidth />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <ZRFInput name="phone"  label={language === 'ENG' ? 'Phone' : 'ফোন'} size="medium" fullWidth />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Button type='submit' sx={{ width: '200px' }} variant="contained">{language === 'ENG' ? 'Submit' : 'জমা'}</Button>
                </Grid>
            </Grid>
        </ZRFForm>
    );
};

export default MembershipForm;

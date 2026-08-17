'use client'
import React, { useState } from 'react';
import ZRFForm from "@/components/Forms/Form";
import ZRFInput from "@/components/Forms/Input";
import ZRFTextArea from "@/components/Forms/TextArea";
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/provider/LanguageProvider';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ContactForm = () => {
    const { language } = useLanguage()
    const router = useRouter()
    const [isChecked, setIsChecked] = useState(true)

    const handleSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`, data);
            toast.success('Form submitted successfully!', {
                id: 'success-toast',
                duration: 1000,
            });
            router.push('/')
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <ZRFForm onSubmit={handleSubmit}>
            <div className="lg:flex gap-4 w-full">
                <ZRFInput
                    type="text"
                    name="name"
                    required
                    label={language == 'ENG' ? 'Name' : 'নাম'}
                    fullWidth
                    size="medium"
                />
                <ZRFInput
                    type="email"
                    name="email"
                    required
                    label={language == 'ENG' ? 'Email' : 'ইমেইল'}
                    fullWidth
                    size="medium"
                />
            </div>
            <div className="lg:flex gap-4">
                <ZRFInput
                    type="tel"
                    name="phone"
                    label={language == 'ENG' ? 'Phone' : 'ফোন'}
                    fullWidth
                    size="medium"
                />
                <ZRFInput
                    type="text"
                    name="subject"
                    label={language == 'ENG' ? 'Subject' : 'বিষয়'}
                    fullWidth
                    size="medium"
                />
            </div>
            <div className="mt-5">
                <ZRFTextArea
                    name="message"
                    minRows={5}
                    label={language == 'ENG' ? 'Message' : 'বার্তা'}
                    sx={{
                        borderColor: '#FFF',
                        '& .MuiOutlinedInput-root': {
                            padding: '8px',
                            '& textarea': {
                                minHeight: '10px',
                            },
                        },
                    }}
                />
            </div>

            <div className="flex items-center mb-4 mt-4">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            icon={<CheckBoxOutlineBlankIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
                            checkedIcon={<CheckBoxIcon sx={{ color: '#216740' }} />}
                            sx={{
                                padding: '8px',
                                '&:hover': {
                                    backgroundColor: 'rgba(33, 103, 64, 0.1)',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: 24,
                                },
                            }}
                        />
                    }
                    label={
                        <span style={{
                            color: '#C8E0D0', // Fixed: Added proper color
                            fontSize: '14px',
                            fontWeight: 400,
                        }}>
                            {language == 'ENG' ? 'I agree to the terms and privacy policy' : 'আমি শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত'}
                        </span>
                    }
                    sx={{
                        margin: 0,
                        '& .MuiFormControlLabel-label': {
                            color: '#C8E0D0', // Fixed: Ensure label color
                            marginLeft: '4px',
                        },
                    }}
                />
            </div>

            <Button
                type="submit"
                disableElevation
                variant="contained"
                sx={{
                    backgroundColor: '#216740',
                    color: '#FFFFFF',
                    padding: '12px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#2E8B57',
                    },
                    '&:disabled': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                    width: '100%',
                    maxWidth: '200px',
                }}
            >
                {language == 'ENG' ? 'Contact Us' : 'যোগাযোগ করুন'}
            </Button>
        </ZRFForm>
    );
};

export default ContactForm;
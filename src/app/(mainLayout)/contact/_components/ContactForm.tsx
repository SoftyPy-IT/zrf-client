'use client'
import React from 'react';
import ZRFForm from "@/components/Forms/Form";
import ZRFInput from "@/components/Forms/Input";
import ZRFTextArea from "@/components/Forms/TextArea";
import { Button, Checkbox } from '@mui/material';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/provider/LanguageProvider';
const ContactForm = () => {
    const { language } = useLanguage()
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const router = useRouter()
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
        <>
            <ZRFForm onSubmit={handleSubmit}>
                <div className="lg:flex gap-2 w-full">
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
                <div className="lg:flex gap-2">
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
                        sx={{
                            border: "1px solid black",
                            borderRadius: "3px",
                            padding: "10px",
                        }}

                        placeholder={language == 'ENG' ? 'Write something...' : 'কিছু লিখুন...'}
                    />
                </div>

                <div className="flex items-center mb-4">
                    <Checkbox {...label} defaultChecked />
                    {language == 'ENG' ? 'I agree to the terms and privacy policy' : 'আমি শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত'}

                </div>

                <Button type="submit" disableElevation>
                    {language == 'ENG' ? 'Contact Us' : 'যোগাযোগ করুন'}
                </Button>
            </ZRFForm>
        </>
    );
};

export default ContactForm;
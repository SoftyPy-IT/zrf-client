import React from 'react';
import EastIcon from "@mui/icons-material/East";
import MailOutline from "@mui/icons-material/MailOutline";
import { useLanguage } from '@/provider/LanguageProvider';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Subscribe = () => {
    const { language } = useLanguage()
    const placeholder = language === 'ENG' ? 'Enter your email address' : 'আপনার ইমেইল লিখুন';
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/subscribe`, data);
            toast.success('Subscribe successfully!', {
                id: 'success-toast',
                duration: 1000,
            });

            reset();
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-auto">
            <div className="relative w-full">
                <MailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
                <input
                    type="text"
                    placeholder={placeholder}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address'
                        }
                    })}
                    className="w-full md:w-[380px] lg:w-[440px] bg-white text-gray-800 placeholder-gray-500 text-sm pl-12 pr-32 md:pr-36 py-3.5 md:py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FEC909] border border-white/40 shadow-xl shadow-black/10"
                />
                <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0F3D26] to-[#1A5C3D] hover:from-[#1A5C3D] hover:to-[#20bd86] text-white text-[13px] md:text-sm font-semibold px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                    {language === 'ENG' ? 'Subscribe' : 'সাবসক্রাইব'}
                    <EastIcon sx={{ fontSize: 18 }} />
                </button>
                {errors.email && (
                    <p className="text-[#FFD9D9] text-xs mt-2 ml-1">
                        {errors.email.message as string}
                    </p>
                )}
            </div>
        </form>
    );
};

export default Subscribe;
import React from 'react';
import EastIcon from "@mui/icons-material/East";
import { useLanguage } from '@/provider/LanguageProvider';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Subscribe = () => {
    const { language } = useLanguage()
    const placeholder = language === 'ENG' ? 'Enter your email' : 'আপনার ইমেইল লিখুন';
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative  xl:flex items-center w-full">
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
                    className="w-[250px] md:w-[250px] lg:w-[500px] p-3 md:py-3 lg:py-6 px-2 md:px-4 border border-gray-300 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px]"
                />
                <button className="text-[12px] absolute right-0 py-1 lg:py-4 px-1 lg:px-8 mx-1 md:mx-2  my-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {
                        language === 'ENG' ? 'Subscribe' : 'সাবসক্রাইব'
                    }  <EastIcon sx={{ fontSize: '20px' }} />
                </button>
            </div>
        </form>
    );
};

export default Subscribe;
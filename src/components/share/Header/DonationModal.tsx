import { Close } from '@mui/icons-material';
import React from 'react';
import { DonationTab } from './DonationTab';


interface DonationModalProps {
    onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[99999999999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white py-8 px-1 md:p-6 shadow-lg rounded w-[90%]  
                      sm:w-[600px] sm:h-auto h-auto
                      md:w-[700px] md:h-[700px] 
                      lg:w-[800px] lg:h-[800px] 
                      xl:w-[900px] xl:h-[850px] 
                      2xl:w-[900px] 2xl:h-[700px]">
                <button
                    onClick={onClose}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:text-gray-800">
                    <Close />
                </button>
                <DonationTab onClose={onClose} />
            </div>
        </div>
    );
};

export default DonationModal;

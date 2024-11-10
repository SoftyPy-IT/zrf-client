import { Close } from '@mui/icons-material';
import React from 'react';
import DonationTab from './DonationTab';

interface DonationModalProps {
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 shadow-lg rounded w-[90%] sm:w-[700px] md:w-[900px] lg:w-[900px] h-[80%] sm:h-auto md:h-[750px]">
                <button 
                    onClick={onClose} 
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:text-gray-800">
                    <Close />
                </button>
                <DonationTab />
            </div>
        </div>
    );
};

export default DonationModal;

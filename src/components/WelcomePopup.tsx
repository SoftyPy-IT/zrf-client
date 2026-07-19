'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    Dialog,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import popupImage from '../../src/assets/images/registration/popup.jpeg';

export default function WelcomePopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem('visited');

        if (!visited) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('visited', 'true');
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={false}
            sx={{
                zIndex: 999999999999999, // Dialog container
            }}
            slotProps={{

                paper: {
                    sx: {
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 3,
                        width: {
                            xs: '95vw',
                            sm: '80vw',
                            md: '700px',
                        },
                        maxWidth: '700px',
                        m: 2,
                    },
                },
            }}
        >
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1000000,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    '&:hover': {
                        bgcolor: '#fff',
                    },
                }}
            >
                <CloseIcon />
            </IconButton>

            <Image
                src={popupImage}
                alt="Welcome"
                priority
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                }}
                sizes="(max-width:600px) 95vw, (max-width:900px) 80vw, 700px"
            />
        </Dialog>
    );
}
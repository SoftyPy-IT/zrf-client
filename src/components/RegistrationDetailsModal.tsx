'use client';

import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Button,
    Typography,
    IconButton,
} from '@mui/material';
import {
    School as SchoolIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import Image from 'next/image';

interface DetailsDialogProps {
    open: boolean;
    onClose: () => void;
    language: string;
    imageSrc: any;
}

export default function RegistrationDetailsModal({ open, onClose, language, imageSrc }: DetailsDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    bgcolor: 'rgba(0,0,0,0.95)',
                    borderRadius: 3,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                    zIndex: '999999px'
                }
            }}
        >
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',

            }}>

                <IconButton onClick={onClose} sx={{ color: '#FEC909' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{
                p: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#000',
                minHeight: '60vh',
            }}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    maxHeight: '70vh',
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        src={imageSrc}
                        alt="Science Fair Competition Details"
                        width={1000}
                        height={700}
                        style={{
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '100%',
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            borderRadius: '8px',
                        }}
                        priority
                    />
                </Box>
            </DialogContent>

        </Dialog>
    );
}
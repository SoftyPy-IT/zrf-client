"use client";

import { Close } from "@mui/icons-material";
import React from "react";
import { Modal, Box, IconButton, Fade, Backdrop } from "@mui/material";
import MembershipForm from "./MembershipForm";

interface DonationModalProps {
  onClose: () => void;
  open?: boolean;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose, open = true }) => {
  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto' as 'auto',
    bgcolor: 'transparent',
    boxShadow: 'none',
    outline: 'none',
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Box position="relative">
            <IconButton
              onClick={onClose}
              sx={{
                position: 'sticky',
                top: 0,
                float: 'right',
                zIndex: 2,
                bgcolor: '#dc3545',
                color: 'white',
                '&:hover': {
                  bgcolor: '#c82333',
                },
                width: 36,
                height: 36,
                mb: 1,
              }}
            >
              <Close fontSize="small" />
            </IconButton>
            <MembershipForm onClose={onClose} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DonationModal;
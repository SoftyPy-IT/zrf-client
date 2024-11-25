import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@/components/share/Container";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root": {
    width: "500px",
    maxWidth: "90%",
  },
}));

const CallToAction = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div className="bg-gradient-to-r from-yellow-600 to-green-600 text-center py-16 text-white">
        <h2 className="text-4xl font-bold mb-5 uppercase">আহ্বান</h2>
        <p className="lg:w-[600px] text-center mx-auto mb-5 lg:px-0 px-5">
          আমাদের ফাউন্ডেশনে যোগসহযোগিতা দান করে, স্বেচ্ছাসেবী হিসেবে বা আমাদের
          মিশন ছড়িয়ে দিয়ে। আপনার অবদান একটি স্থায়ী প্রভাব ফেলতে পারে।
        </p>

        <div className="space-x-5 lg:space-y-0 md:space-y-0 space-y-5">
          <button className="bg-gradient-to-r from-green-600 to-yellow-600 border text-white px-6 py-2 rounded uppercase text-sm">
            সহযোগিতা
          </button>
          <button
            onClick={handleClickOpen}
            className="bg-gradient-to-r from-green-600 to-yellow-600 border text-white px-6 py-2 rounded uppercase"
          >
            স্বেচ্ছাসেবক হন
          </button>
          <button className="bg-gradient-to-r from-green-600 to-yellow-600 border text-white px-6 py-2 rounded uppercase">
            আমাদের মিশন শেয়ার করুন
          </button>
        </div>

        {/* স্বেচ্ছাসেবক সাইনআপ ফর্মের জন্য মডাল */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            স্বেচ্ছাসেবক ফর্ম
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              স্বেচ্ছাসেবক হিসেবে সাইন আপ করতে নিচের ফর্মটি পূরণ করুন।
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="নাম"
              type="text"
              fullWidth
              variant="outlined"
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="email"
              label="ইমেইল"
              type="email"
              fullWidth
              variant="outlined"
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="description"
              label="বিবরণ"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-green-600 to-yellow-600 border text-white px-6 py-2 rounded uppercase text-sm"
            >
              জমা দিন
            </button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </Container>
  );
};
export default CallToAction;

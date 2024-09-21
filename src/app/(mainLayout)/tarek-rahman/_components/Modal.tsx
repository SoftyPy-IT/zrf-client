import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded"
        >
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.8)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FFFFFF',
        },
        '&.Mui-error fieldset': {
            borderColor: '#f44336',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-focused': {
            color: '#FFFFFF',
        },
        '&.Mui-error': {
            color: '#f44336',
        },
    },
    '& .MuiInputBase-input': {
        color: '#FFFFFF',
        '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
        },
    },
    '& .MuiFormHelperText-root': {
        color: 'rgba(255, 255, 255, 0.6)',
        '&.Mui-error': {
            color: '#f44336',
        },
    },
}));

export const selectStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFFFFF',
    },
    '& .MuiSelect-select': {
        color: '#FFFFFF',
    },
    '& .MuiSvgIcon-root': {
        color: 'rgba(255, 255, 255, 0.7)',
    },
}
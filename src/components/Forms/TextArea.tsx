import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps, TextField } from "@mui/material";

type TTextareaProps = {
  name: string;
  placeholder?: string;
  minRows?: number;
  sx?: SxProps;
  required?: boolean;
  label?: string;
};

const ZRFTextArea = ({
  name,
  placeholder,
  minRows = 2,
  sx,
  required,
  label,
}: TTextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          onChange={onChange}
          value={value || ''}
          placeholder={placeholder}
          label={label}
          multiline
          minRows={minRows}
          fullWidth
          variant="outlined"
          error={!!error}
          helperText={error?.message}
          // InputProps ব্যবহার করে সরাসরি স্টাইল প্রয়োগ
          InputProps={{
            sx: {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              // নচআউটলাইন - বর্ডার
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.7) !important',
                borderWidth: '2px !important',
              },
              // হোভার
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.9) !important',
                  borderWidth: '2px !important',
                },
              },
              // ফোকাস
              '&.Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FFFFFF !important',
                  borderWidth: '2.5px !important',
                },
              },
              // এরর
              '&.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#f44336 !important',
                  borderWidth: '2px !important',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#f44336 !important',
                  borderWidth: '2px !important',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#f44336 !important',
                  borderWidth: '2.5px !important',
                },
              },
              // ডিজেবল
              '&.Mui-disabled': {
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.2) !important',
                  borderWidth: '1.5px !important',
                },
              },
              // টেক্সট এরিয়া
              '& textarea': {
                color: '#FFFFFF !important',
                padding: '14px',
                fontSize: '14px',
                lineHeight: '1.6',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.5) !important',
                  opacity: 1,
                  fontWeight: 400,
                },
                '&:focus::placeholder': {
                  color: 'rgba(255, 255, 255, 0.3) !important',
                  opacity: 1,
                },
              },
            },
          }}
          // InputLabelProps দিয়ে লেবেল স্টাইল
          InputLabelProps={{
            sx: {
              color: '#C8E0D0',
              fontWeight: 500,
              fontSize: '14px',
              '&.Mui-focused': {
                color: '#216740',
              },
              '&.Mui-error': {
                color: '#f44336',
              },
            },
          }}
          // FormHelperTextProps দিয়ে হেল্পার টেক্সট স্টাইল
          FormHelperTextProps={{
            sx: {
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '12px',
              marginLeft: '2px',
              marginTop: '4px',
              '&.Mui-error': {
                color: '#f44336',
              },
            },
          }}
          sx={sx}
        />
      )}
    />
  );
};

export default ZRFTextArea;
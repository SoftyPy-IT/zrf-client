import { SxProps, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  type?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  margin?: "none" | "normal" | "dense";
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ZRFInput = ({
  name,
  label,
  size = "medium",
  type = "text",
  fullWidth = true,
  sx,
  disabled,
  placeholder,
  required,
  variant = "outlined",
  margin = "normal",
  multiline = false,
  rows = 4,
  onChange,
  value
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange: fieldOnChange, value: fieldValue },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          onChange={onChange || fieldOnChange}
          type={type}
          label={label}
          size={size}
          variant={variant}
          fullWidth={fullWidth}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#333', // Label color
              fontWeight: 500,
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#1976d2', // Label color when focused
            },
            '& .MuiOutlinedInput-root': {
              color: '#000', // Text color
              backgroundColor: '#fff', // Background color
              borderRadius: '8px',
              '& fieldset': {
                borderColor: '#ccc', // Default border color
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: '#1976d2', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2', // Border color when focused
                borderWidth: '2px',
              },
              '& input': {
                color: '#000', // Input text color
                padding: '14px 14px', // Padding for better appearance
              },
            },
            '& .MuiOutlinedInput-root.Mui-disabled': {
              backgroundColor: '#f5f5f5', // Disabled background
            },
            '& .MuiFormHelperText-root': {
              color: '#d32f2f', // Error text color
              fontWeight: 400,
            },
            '& .MuiFormHelperText-root.Mui-error': {
              color: '#d32f2f',
            },
            marginBottom: '16px',
            ...sx,
          }}
          placeholder={placeholder}
          required={required}
          margin={margin}
          error={!!error?.message}
          helperText={error?.message}
          multiline={multiline}
          rows={rows}
          value={value !== undefined ? value : fieldValue}
          disabled={disabled}
        />
      )}
    />
  );
};

export default ZRFInput;
import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  margin?: "none" | "normal" | "dense";
  disablePast?: boolean;
  disableFuture?: boolean;
  defaultValue?: string; 
}


const ZRFDatePicker = ({
  name,
  size = "medium",
  label,
  required,
  fullWidth = true,
  margin = "normal",
  sx,
  disableFuture = true,
}: IDatePicker) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs().format('YYYY-MM-DD')} // Set default value here
      render={({ field: { onChange, value, ...field } }) => {
        const dateValue = value ? dayjs(value) : dayjs();

        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              {...field}
              onChange={(date) => {
                const finalDate = date || dayjs();
                onChange(finalDate.format('YYYY-MM-DD'));
              }}
              value={dateValue}
              maxDate={disableFuture ? dayjs() : undefined}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  fullWidth: fullWidth,
                  margin: margin,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default ZRFDatePicker;
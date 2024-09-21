import * as React from "react";
import { SxProps } from "@mui/system";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  placeholder?: string;
  minRows?: number;
  sx?: SxProps;
  required?: boolean;
};

const ZRFTextArea = ({
  name,
  placeholder,
  minRows = 2, 
  sx,
  required,
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
        <TextareaAutosize
          onChange={onChange}
          value={value}
          defaultValue={
            formState.dirtyFields[name] ? formState.dirtyFields[name] : value
          }
          placeholder={placeholder}
          minRows={minRows}
          style={{
            width: "100%",
            maxHeight: "100px",
            ...(sx as React.CSSProperties),
          }}
        />
      )}
    />
  );
};

export default ZRFTextArea;

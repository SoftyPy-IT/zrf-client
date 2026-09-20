import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: 10,
    transition: "background-color 0.2s ease, box-shadow 0.2s ease",
    "& fieldset": {
      borderColor: "rgba(200, 224, 208, 0.28)",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      "& fieldset": {
        borderColor: "rgba(46, 139, 87, 0.55)",
      },
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(46, 139, 87, 0.08)",
      boxShadow: "0 0 0 3px rgba(46, 139, 87, 0.18)",
      "& fieldset": {
        borderColor: "#2E8B57",
        borderWidth: 1.5,
      },
    },
    "&.Mui-error fieldset": {
      borderColor: "#ef5350",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(200, 224, 208, 0.75)",
    "&.Mui-focused": {
      color: "#7BC99A",
    },
    "&.Mui-error": {
      color: "#ef5350",
    },
  },
  "& .MuiInputBase-input": {
    color: "#F4FAF6",
    "&::placeholder": {
      color: "rgba(200, 224, 208, 0.45)",
      opacity: 1,
    },
  },
  "& .MuiFormHelperText-root": {
    color: "rgba(200, 224, 208, 0.65)",
    "&.Mui-error": {
      color: "#ef5350",
    },
  },
}));

export const selectStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  borderRadius: "10px",
  color: "#F4FAF6",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(200, 224, 208, 0.28)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(46, 139, 87, 0.55)",
  },
  "&.Mui-focused": {
    backgroundColor: "rgba(46, 139, 87, 0.08)",
    boxShadow: "0 0 0 3px rgba(46, 139, 87, 0.18)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2E8B57",
      borderWidth: "1.5px",
    },
  },
  "& .MuiSelect-select": {
    color: "#F4FAF6",
  },
  "& .MuiSvgIcon-root": {
    color: "rgba(200, 224, 208, 0.7)",
  },
};

export const selectMenuProps = {
  PaperProps: {
    sx: {
      bgcolor: "#132620",
      color: "#F4FAF6",
      border: "1px solid rgba(46,139,87,0.35)",
      borderRadius: 2,
      mt: 0.5,
      "& .MuiMenuItem-root": {
        fontSize: "0.925rem",
        "&:hover": {
          backgroundColor: "rgba(46,139,87,0.18)",
        },
        "&.Mui-selected": {
          backgroundColor: "rgba(46,139,87,0.28)",
          "&:hover": {
            backgroundColor: "rgba(46,139,87,0.36)",
          },
        },
      },
    },
  },
};

export const panelSx = {
  p: { xs: 2, sm: 2.5, md: 3 },
  borderRadius: { xs: 2, md: 2.5 },
  backgroundColor: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(46,139,87,0.22)",
};

export const chipSx = {
  m: 0.5,
  height: 28,
  maxWidth: { xs: "100%", sm: 280 },
  fontSize: "0.75rem",
  backgroundColor: "rgba(46,139,87,0.15)",
  color: "#C8E0D0",
  border: "1px solid rgba(46,139,87,0.35)",
  "& .MuiChip-label": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
  },
  "& .MuiChip-deleteIcon": {
    color: "rgba(200,224,208,0.6)",
    "&:hover": { color: "#FEC909" },
  },
};

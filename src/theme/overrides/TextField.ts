import { Components, Theme } from "@mui/material";

const MuiTextField: Components<Theme> = {
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: "100%",
        "&.MuiTextField-root": {
          minHeight: "82.79px",
        },
        "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #212121",
          "& :hover": {
            border: "none !important",
          },
          "&:hover": {
            border: "none !important",
          },
        },
        "& .MuiInputBase-input": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundColor: "transparent",
        },

        "& :-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px white inset !important",
          backgroundColor: "transparent !important",
        },

        "& .MuiInputLabel-root": {
          top: 2,
          fontWeight: 600,
          fontSize: "16px",
          fontFamily: "suit",
        },

        "& .MuiInputBase-root": {
          ":hover": {
            borderColor: "#3196ff",
          },
          fontSize: "18px",
          borderRadius: "12px",
        },

        "& label": {
          left: 3,
          fontSize: 16,

          fontWeight: 600,
          fontFamily: "suit",
        },

        "& label.Mui-focused": {
          left: 3,
          fontSize: 16,
          color: "#3196ff",
          fontWeight: 600,
          fontFamily: "suit",
        },

        "& .MuiOutlinedInput-root": {
          ":hover": {
            border: "none !important",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#3196ff",
          },

          "& .Mui-error": {
            color: "#f44335",
            borderColor: "#f44335",
          },
        },

        "& .MuiFormHelperText-root": {
          fontWeight: 600,
          fontSize: "12px",
          color: "#f44335",
          fontFamily: "suit",
          margin: "4px 0px 0px 4px",
        },
      }),
    },
  },
};

export default MuiTextField;

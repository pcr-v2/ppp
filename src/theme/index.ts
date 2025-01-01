import { createTheme, Theme } from "@mui/material";

import OverrideButton from "./overrides/Button";
import OverrideTextField from "./overrides/TextField";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
      mobile: 360,
      tablet: 834,
      laptop: 1024,
      desktop: 1200,
    },
  },

  components: {
    ...OverrideButton,
    ...OverrideTextField,
  },
});

export default theme;

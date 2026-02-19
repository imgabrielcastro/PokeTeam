import { createTheme } from "@mui/material/styles";

import "@fontsource/silkscreen/400.css";

export const theme = createTheme({
  typography: {
    fontFamily: "Silkscreen, cursive",
    h4: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#1E293B",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#EEEEEE",
    },
    text: {
      primary: "#616161",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4aedc4",
      main: "#1de9b6",
      dark: "#14a37f",
      contrastText: "#000",
    },
    warning: {
      main: "#ffcc00",
      dark: "#ff9966",
    },
  },
  typography: {
    fontFamily: "Open sans, sans-serif", // Customize the font-family here
  },
});

export default theme;

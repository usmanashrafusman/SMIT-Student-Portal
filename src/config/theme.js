import { createTheme } from "@mui/material/styles";
const font = "'sans-serif";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8cc143",
    },
    secondary: {
      main: "#0d73bd",
      contrastText: "#fff",
    },
    neutral: {
      main: "#ff0",
      contrastText: "#ddd",
    },

  },

  typography: {
    fontFamily: font,
    h1: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "25.2px",
    },
    h2: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: "25.2px",
    },
    h3: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: "25.2px",
    },
    h4: {
      fontSize: 11,
      fontWeight: 700,
      lineHeight: "25.2px",
    },
    h5: {
      fontSize: 9,
      fontWeight: 700,
      lineHeight: "25.2px",
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 700,
    },
    button: {
      fontSize: 12,
      lineHeight: "27px",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
});
export default theme;

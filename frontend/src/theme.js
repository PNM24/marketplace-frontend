import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  shape: { borderRadius: 12 },
  palette: {
    primary: { main: '#2c3e50' },
    secondary: { main: '#1abc9c' },
    background: { default: '#f8f9fa', paper: '#ffffff' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiTextField: {
      styleOverrides: {
        root: { '& .MuiOutlinedInput-root': { borderRadius: 12 } },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
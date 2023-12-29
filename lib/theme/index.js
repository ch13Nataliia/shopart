import { createTheme } from '@mui/material/styles';
import { orange, blue } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: blue[900],
    },
    secondary: {
      main: orange[500],
      contrastText: blue[900],
    },
  },
});
export default theme;

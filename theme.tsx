import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#23153C',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: `"Merriweather", "Helvetica", "Arial", sans-serif`,
  },
  overrides: {
    MuiGrid: {
      'spacing-xs-5': {
        width: '100%',
        '& > $item': {
          paddingRight: '0'
        }
      }
    }
  }
});

export default theme;
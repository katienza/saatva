import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: [
      'Arial',
      'Open Sans',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Questrial',
    ].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          color: '#000000',
          backgroundColor: '#f6f5f3'
        },
        h1: {
          fontFamily: 'Source Serif Pro',
          fontWeight: 400,
          marginTop: 0
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 0
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '.5px',
        padding: '16px'
      },
      contained: {
        color: '#ffffff',
        backgroundColor: '#d4aa63',
        borderColor: '#d4aa63',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#d4aa63',
          opacity: .7,
          boxShadow: 'none'
        }
      }
    },
    MuiFormLabel: {
      root: {
        textTransform: 'uppercase',
        fontSize: '.85rem',
        letterSpacing: '0.5px',
        marginBottom: '10px',
        fontWeight: 600,
        color: 'rgba(31, 31, 31, 1)',
        '&.Mui-focused': {
          color: 'rgba(31, 31, 31, 1)'
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: '#000000',
        borderBottom: 'rgba(230, 230, 229, 1)',
        borderBottomStyle: 'solid',
        borderBottomWidth: '2px',
        boxShadow: 'none',
      }
    }
  }
});

export default theme;

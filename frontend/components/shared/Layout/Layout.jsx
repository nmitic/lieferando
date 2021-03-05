import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '../../adaptersUiLib';
import Breadcrumbs from './Breadcrumbs';
import Head from 'next/head';
import Header from './Header'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffb143',
      main: '#ff8000',
      dark: '#c55100',
      contrastText: '#000',
      success: "#00c659",
      failure: "#a21000"
    },
    secondary: {
      light: '#6ba2ff',
      main: '#1574f5',
      dark: '#004ac1',
      contrastText: '#000',
      success: "#00c659",
      failure: "#a21000"
    },
  },
});

const Layout = props => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="sm">
          <CssBaseline />
          <Breadcrumbs />
          {props.children}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
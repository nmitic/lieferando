import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffb143',
        main: '#ff8000',
        dark: '#c55100',
        contrastText: '#000',
      },
      secondary: {
        light: '#6ba2ff',
        main: '#1574f5',
        dark: '#004ac1',
        contrastText: '#000',
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
                <Container maxWidth="md">
                    <CssBaseline />
                    {props.children}
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Layout;
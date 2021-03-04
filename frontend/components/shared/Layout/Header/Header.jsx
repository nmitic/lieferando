import Logo from './LieferandoLogo';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1)
    }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
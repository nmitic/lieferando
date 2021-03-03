import Link from 'next/link';
import UILink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const NavigationTiles = props => {
  return (
      <Grid container>
        <Grid item sm={6}>
          <Link href="/contact">
          <Typography>
            <UILink>contact</UILink>
          </Typography>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Link href="/orders">
            <Typography>
              <UILink>orders</UILink>
            </Typography>
          </Link>
        </Grid>
      </Grid>
  );
}

export default NavigationTiles;
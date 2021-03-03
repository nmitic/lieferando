import Link from 'next/link';
import UILink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140
  }
}));
const NavigationTiles = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <Link href="/contact">
          <UILink>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/contact.jpg"
                  title="/contact.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h6">
                    Contact Us
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </UILink>
        </Link>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Link href="/orders">
          <UILink>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/order.jpg"
                  title="/order.jpg"
                />
                <CardContent>
                  <Typography variant="h6" component="h6">
                    Find you order
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </UILink>
        </Link>
      </Grid>
    </Grid>
  );
}

export default NavigationTiles;
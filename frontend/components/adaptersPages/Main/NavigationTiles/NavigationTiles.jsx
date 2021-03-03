import Link from 'next/link';
import UILink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './NavigationTiles.module.css';


const NavigationTiles = props => {
  return (
    <Grid container spacing="2">
      <Grid item sm={6}>

        <Link href="/contact">
          <UILink>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={styles.media}
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
      <Grid item sm={6}>
        <Link href="/orders">
          <UILink>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={styles.media}
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
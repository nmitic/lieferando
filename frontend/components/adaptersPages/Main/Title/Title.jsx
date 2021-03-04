import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  }
}));

const Title = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h4" gutterBottom>
        Help Center
      </Typography>
    </div>
  );
}

export default Title;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '100%'
  }
}));

const SearchOrders = ({ handleSearchOrders }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      orderNumber: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item sm={10} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            id="search-order"
            name="search-order"
            label="Search Order"
            value={formik.values.orderNumber}
            onChange={formik.handleChange}
            error={formik.touched.orderNumber && Boolean(formik.errors.orderNumber)}
            helperText={formik.touched.orderNumber && formik.errors.orderNumber}
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button 
            color="primary"
            variant="contained"
            fullWidth type="submit"
            size="large"
            className={classes.button}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchOrders;
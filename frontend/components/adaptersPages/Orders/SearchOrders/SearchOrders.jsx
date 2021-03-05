import {
  TextField,
  Button,
  Grid
} from '../../../adaptersUiLib';
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
      const {orderNumber} = values;
      handleSearchOrders(orderNumber)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} data-testid="search-orders">
      <Grid container spacing={2}>
        <Grid item sm={10} xs={12}>
          <TextField
            inputProps={{ "data-testid": "search-orders-input" }}
            fullWidth
            variant="outlined"
            id="orderNumber"
            name="orderNumber"
            label="Search Order"
            value={formik.values.orderNumber}
            onChange={formik.handleChange}
            error={formik.touched.orderNumber && Boolean(formik.errors.orderNumber)}
            helperText={formik.touched.orderNumber && formik.errors.email}
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button
            data-testid="search-order-submit"
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
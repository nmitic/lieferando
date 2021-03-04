import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { validationSchema } from './validationSchema';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      order: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      <TextField
        variant="outlined"
        fullWidth
        id="order"
        name="order"
        label="order"
        value={formik.values.order}
        onChange={formik.handleChange}
        error={formik.touched.order && Boolean(formik.errors.order)}
        helperText={formik.touched.order && formik.errors.order}
      />
      <TextField
        variant="outlined"
        fullWidth
        id="name"
        name="name"
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        variant="outlined"
        fullWidth
        id="phone"
        name="phone"
        label="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.name && formik.errors.phone}
      />
      <TextField
        variant="outlined"
        fullWidth
        id="email"
        name="email"
        label="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows="10"
        id="message"
        name="message"
        label="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
    </Button>
    </form>
  );
};

export default ContactForm;
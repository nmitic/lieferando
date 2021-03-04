import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2)
  }
}));

const SearchBar = props => {
  const classes = useStyles();

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <TextField
          id="search-help-center"
          label="Search help center"
          fullWidth
          variant="outlined"
        />
      </form>
    </div>
  );
}

export default SearchBar;
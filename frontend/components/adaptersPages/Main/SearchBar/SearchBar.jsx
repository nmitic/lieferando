import TextField from '@material-ui/core/TextField';

const SearchBar = props => {
  return (
    <div>
      <form noValidate autoComplete="off">
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
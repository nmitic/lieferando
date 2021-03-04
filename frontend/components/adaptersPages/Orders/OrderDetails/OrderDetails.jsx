import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import EuroSymbolOutlinedIcon from '@material-ui/icons/EuroSymbolOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  deliveredItem: {
    color: theme.palette.primary.success
  },
  iconSuccess: {
    color: theme.palette.primary.success
  },
  notDeliveredItem: {
    color: theme.palette.primary.failure
  },
  iconFailure: {
    color: theme.palette.primary.failure
  }
}));

const formatDate = date => new Date(date).toUTCString();

const OrderDetails = ({ currentOrder }) => {
  const {
    reference,
    date,
    delivered,
    cost
  } = currentOrder;

  const classes = useStyles();

  return (
    <div data-testid="order-details">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemIcon>
            <BorderColorOutlinedIcon />
          </ListItemIcon>
          <ListItemText 
            primary={reference}
            secondary="Order reference number"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DateRangeOutlinedIcon />
          </ListItemIcon>
          <ListItemText 
            primary={formatDate(date)}
            secondary="Order date"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EuroSymbolOutlinedIcon />
          </ListItemIcon>
          <ListItemText 
            primary={cost}
            secondary="Order cost"
          />
        </ListItem>
      </List>
      {
        //Show either green or red styled delivered flag
        delivered ? (
          <ListItem className={classes.deliveredItem}>
            <ListItemIcon className={classes.iconSuccess}>
              <DoneAllOutlinedIcon />
            </ListItemIcon>
            <ListItemText 
              primary='Delivered'
              secondary="delivery status"
            />
          </ListItem>
        ) : (
            <ListItem className={classes.notDeliveredItem}>
              <ListItemIcon className={classes.iconFailure}>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <ListItemText 
                primary='Not delivered'
                secondary="delivery status"
              />
            </ListItem>
          )
      }
    </div>
  );
};

export default OrderDetails;
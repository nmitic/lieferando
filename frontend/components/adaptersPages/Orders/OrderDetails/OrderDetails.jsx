import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '../../../adaptersUiLib';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import EuroSymbolOutlinedIcon from '@material-ui/icons/EuroSymbolOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { makeStyles } from '@material-ui/core/styles';

import { formatDate } from '../../../../utils';

const useStyles = makeStyles((theme) => ({
  delivered: {
    color: theme.palette.primary.success
  },
  notDelivered: {
    color: theme.palette.primary.failure
  }
}));

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
          <ListItem className={classes.delivered}>
            <ListItemIcon className={classes.delivered}>
              <DoneAllOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary='Delivered'
              secondary="delivery status"
            />
          </ListItem>
        ) : (
            <ListItem className={classes.notDelivered}>
              <ListItemIcon className={classes.notDelivered}>
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

OrderDetails.prototype = {
  currentOrder: PropTypes.exact({
    reference: PropTypes.string,
    date: PropTypes.string,
    delivered: PropTypes.bool,
    cost: PropTypes.number,
  }).isRequired
}

export default OrderDetails;
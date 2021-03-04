import Layout from '../../shared/Layout';
import SearchOrders from './SearchOrders';
import OrderDetails from './OrderDetails'
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import {fetchOrdersData} from './Orders.request';

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null)
  const [orderNotFound, setOrderNotFound] = useState(false)

  const handleSearchOrders = orderReference => {
    const searchedOrder = ordersData.find(order => order.reference === orderReference)
    if (searchedOrder) {
      setCurrentOrder(searchedOrder)
      setOrderNotFound(false)
    } else {
      setOrderNotFound(true)
    }
  }

  useEffect(() => {
    fetchOrdersData(
      data => setOrdersData(data),
      error => console.error(error)
    );
  }, [])

  return (
    <Layout>
      <SearchOrders handleSearchOrders={handleSearchOrders}/>
      {
        (currentOrder && !orderNotFound) &&
          <OrderDetails currentOrder={currentOrder}/>
      }

      {orderNotFound && (
        <Typography variant="body1" component="p">
          No order found the given reference number
        </Typography>
      )}
      
    </Layout>
  );
};

export default Orders;
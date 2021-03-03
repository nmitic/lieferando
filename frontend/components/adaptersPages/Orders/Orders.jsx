import Layout from '../../layout/';
import SearchOrders from './SearchOrders';
import OrderDetails from './OrderDetails'
import { useState, useEffect } from 'react';
import {fetchOrdersData} from './Orders.request';

const orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null)
  const [orderNotFound, setOrderNotFound] = useState(false)

  const handleSearchOrders = orderReference => {
    const searchedOrder = ordersData.find(order => order.reference === orderReference)
    if (searchedOrder) {
      setCurrentOrder(searchedOrder)
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

      {orderNotFound && "no order found"}
      
    </Layout>
  );
};

export default orders;
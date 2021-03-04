import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import Orders from './Orders';

const responseMock = {
  success: [
    {
      reference: 'ROE475',
      date: new Date(2019, 11, 12),
      delivered: false,
      cost: 12.30,
    },
  ]
}

const setup = () => {
  const util = render(<Orders />);

  const searchOrders = util.queryByTestId('search-orders');
  const searchOrdersInput = util.queryByTestId('search-orders-input');
  const searchOrdersSubmit = util.queryByTestId('search-order-submit');
  const orderNotFound = util.queryByTestId('order-not-found');

  return {
    searchOrders,
    searchOrdersInput,
    searchOrdersSubmit,
    orderNotFound,
    ...util
  }
}

describe('Order page show proper UI elements depending in user interaction', () => {
  afterEach(cleanup);

  // When user first visit the page 
  // then only show searchBox 
  it('initial state, renders searchBox only', () => {
    const { searchOrders, orderNotFound } = setup();

    expect(searchOrders).toBeTruthy();
    expect(orderNotFound).toBeFalsy();
  })

  // When user search for existing order
  // then show order details
  it('show ordersDetail when searching for the existing order', async () => {
    fetch.mockResponse(JSON.stringify(responseMock.success));

    const { searchOrdersInput, searchOrdersSubmit, queryByTestId } = setup();

    fireEvent.change(searchOrdersInput, { target: { value: responseMock.success[0].reference } });
    fireEvent.click(searchOrdersSubmit)

    await waitFor(() => {
      const orderDetails = queryByTestId('order-details');
      expect(orderDetails).toBeTruthy();
    })
  })

  // When user search for non existing order
  // then show order not found message
  it('show not found message when searching for the non existing order', async () => {
    fetch.mockResponse(JSON.stringify(responseMock.success));

    const { searchOrdersInput, searchOrdersSubmit, queryByTestId } = setup();

    fireEvent.change(searchOrdersInput, { target: { value: 'non existing order' } });
    fireEvent.click(searchOrdersSubmit)

    await waitFor(() => {
      const orderDetails = queryByTestId('order-details');
      const notFoundMessage = queryByTestId('order-not-found');

      expect(orderDetails).toBeFalsy();
      expect(notFoundMessage).toBeTruthy();
    })
  })
});
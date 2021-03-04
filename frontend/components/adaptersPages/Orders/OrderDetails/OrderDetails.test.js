import { render, screen } from '@testing-library/react';

import OrderDetails from './OrderDetails';

const testCases = {
  delivered: {
    reference: 'ROE475',
    date: new Date(2019, 11, 12),
    delivered: true,
    cost: 12.30,
  },
  notDelivered: {
    reference: 'ROE475',
    date: new Date(2019, 11, 12),
    delivered: false,
    cost: 12.30,
  }
}

describe('Order details are showing the correct delivery status depending on the response flag', () => {
  // When the response flag for delivery is set to true
  // Then show the green state
  it('show the green delivery status', () => {
    render(<OrderDetails currentOrder={testCases.delivered}/>)

    screen.getByText('Delivered')
  })
  // When the response flag for delivery is set to false
  // Then show the red state
  it('show the green delivery status', () => {
    render(<OrderDetails currentOrder={testCases.notDelivered}/>)

    screen.getByText('Not delivered')
  })
})
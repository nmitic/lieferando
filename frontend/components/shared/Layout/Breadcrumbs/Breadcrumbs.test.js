import { render, screen } from '@testing-library/react';

import Breadcrumbs from './Breadcrumbs';


describe('Order details are showing the correct delivery status depending on the response flag', () => {
  // When the response flag for delivery is set to true
  // Then show the green state
  it('show the green delivery status', () => {
    render(<Breadcrumbs currentOrder={testCases.delivered} />)

    screen.getByText('Delivered')
  })
})
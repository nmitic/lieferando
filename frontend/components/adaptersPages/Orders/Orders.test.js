import { render } from '@testing-library/react';
import Orders from './Orders';

it('Renders search box', () => {
  const {queryByTestId} = render(<Orders/>)

  expect(queryByTestId('search-orders')).toBeTruthy()
})
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'

import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs are rendered properly depending on the paths object size', () => {
  // When the response flag for delivery is set to true
  // Then show the green state
  it('show the green delivery status', () => {
    render(<Breadcrumbs pathsObject={[
      {
        path: '/',
        name: 'home'
      },
      {
        path: '/firstLevel',
        name: 'firstName'
      },
      {
        path: '/secondLevel',
        name: 'secondLevel'
      }
    ]} />)

    const breadcrumbsLink = screen.queryAllByTestId('breadcrumb-item');
    expect(within(breadcrumbsLink[0]).queryByTestId('breadcrumb-item-non-link')).toBeFalsy();
  })
})
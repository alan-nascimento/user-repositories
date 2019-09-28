import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/api';

import Main from '~/pages/Main';

const apiMock = new MockAdapter(api);

describe('Repositories list component', () => {
  it('should allows input', () => {
    const { getByTestId } = render(<Main />);

    const item = 'Matched';
    const searchInput = getByTestId('search-input');

    searchInput.value = item;

    fireEvent.change(searchInput);
    expect(searchInput.value).toBe('Matched');
  });
});

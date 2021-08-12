import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('expects item count to increase when clicking add-to-cart button', () => {
  const { getByTestId } = render(<App />);
  const cartCount = getByTestId('cartCount');
  const submit = getByTestId('addToCart')

  fireEvent.click(submit);

  expect(cartCount).toHaveTextContent(1);
});

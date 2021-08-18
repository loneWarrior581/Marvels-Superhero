import React from 'react'
import Header from '../Header'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
//the image render a image and have the appropriate alt string.
test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    const { getByTestId } = render(<Header />);
    const headerEl = getByTestId("header");
    expect(headerEl).toHaveAttribute('src', 'logo.png');
    expect(headerEl).toHaveAttribute('alt', 'marvel studios logo');
});


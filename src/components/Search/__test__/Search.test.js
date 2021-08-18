import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from '../Search'
import '@testing-library/jest-dom/extend-expect'

describe('Input Value', () => {
    it('updates on change', () => {
        const getQuery = jest.fn((value) => { });
        const { getByTestId } = render(<Search getQuery={getQuery} />);
        const SearchEl = getByTestId("search");
        fireEvent.change(SearchEl, { target: { value: 'test' } });
        expect(SearchEl.value).toBe('test');
    });
});
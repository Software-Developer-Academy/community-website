//@ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatingSearchBar from "../index";

describe('FloatingSearchBar', () => {
    test('renders the search input', () => {
        render(<FloatingSearchBar onSearch={() => {}} />);
        expect(screen.getByPlaceholderText('Search Members by Name...')).toBeInTheDocument();
    });


    test('calls onSearch prop when search button is pressed', () => {
        const handleSearchMock = jest.fn();
        render(<FloatingSearchBar onSearch={handleSearchMock} />);

        const input = screen.getByPlaceholderText('Search Members by Name...');
        fireEvent.change(input, { target: { value: 'test search' } });
        const button = screen.getByText('Search');
        fireEvent.click(button);
        expect(handleSearchMock).toHaveBeenCalledWith('test search');
    });

    test('updates input value when typing', () => {
        render(<FloatingSearchBar onSearch={() => {}} />);

        const input = screen.getByPlaceholderText('Search Members by Name...');
        fireEvent.change(input, { target: { value: 'Test Member' } });

        expect(input.value).toBe('Test Member');
    });
});

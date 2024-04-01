import React from "react"
import { render, screen } from '@testing-library/react';
import Navbar from "../index";

describe('Navbar', () => {
    test('renders the navbar', () => {
        render(<Navbar />);
        const navbarElement = screen.getByRole('navigation');
        expect(navbarElement).toBeInTheDocument();
    });

    test('displays the logo', () => {
        render(<Navbar />);
        const logoImage = screen.getByAltText('Logo');
        expect(logoImage).toBeInTheDocument();
    });

    test('contains the "Software Developer Academy" name', () => {
        render(<Navbar />);
        const academyText = screen.getByText('Software Developer Academy Pro');
        expect(academyText).toBeInTheDocument();
    });

    test(`has the "Members' Index" title`, () => {
        render(<Navbar />);
        const indexTitle = screen.getByRole('heading', { name: 'Members\' Index' });
        expect(indexTitle).toBeInTheDocument();
    });
});

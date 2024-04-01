import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemberDirectoryPage from "../index";


describe('MemberDirectoryPage', () => {
    test('renders the Navbar component', () => {
        render(<MemberDirectoryPage />);
        const navbar = screen.getByTestId('navbar');
        expect(navbar).toBeInTheDocument();
    });

    test('renders the FloatingSearchBar component', () => {
        render(<MemberDirectoryPage />);
        const floatingSearchBar = screen.getByTestId('floating-search-bar');
        expect(floatingSearchBar).toBeInTheDocument()
    });
});

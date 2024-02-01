/**
 * @jest-environment jsdom
 */
import Home from "@/app/login/page";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from '@testing-library/react';


describe('Home Component', () => {
    it('renders the logo', () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('logo')).toBeInTheDocument();
    });

    it('renders the background image', () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('background-image')).toBeInTheDocument();
    });

    it('renders form inputs and validates them', async () => {
        const { getByPlaceholderText, getByText } = render(<Home />);
        
        // Expect form inputs to be present
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        
        // Submit form without entering any data
        fireEvent.click(getByText('Sign In'));

        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Email is required')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
        });

        // Enter invalid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '' } });
        fireEvent.click(getByText('Sign In'));

        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Invalid email format')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
        });

        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit form with valid data
        fireEvent.click(getByText('Sign In'));

        // You can add assertions here to check for successful form submission behavior
        // For example, expect a certain API call to have been made, or a success message to be displayed
        // You can also wait for async operations to complete using waitFor
    });
});

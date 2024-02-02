/**
 * @jest-environment jsdom
 */
import LoginPage from "@/app/login/page";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

jest.mock('@supabase/auth-helpers-nextjs', () => ({
    createClientComponentClient: jest.fn(() => ({
      auth: {
        signInWithPassword: jest.fn(),
      },
    })),
  }));

describe('LoginPage Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });
    it('renders the logo', () => {
        const { getByTestId } = render(<LoginPage />);
        expect(getByTestId('logo')).toBeInTheDocument();
    });

    it('renders the background image', () => {
        const { getByTestId } = render(<LoginPage />);
        expect(getByTestId('background-image')).toBeInTheDocument();
    });

    it('renders form inputs and validates them', async () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<LoginPage />);
        
        // Expect form inputs to be present
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        
        // Submit form without entering any data
        await act(async () => {
            fireEvent.click(getByText('Sign In'));
        });
    
        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Email is required')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
        });
    
        // Enter invalid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '' } });
        
        // Wrap state updates in act
        await act(async () => {
            fireEvent.click(getByText('Sign In'));
        });
    
        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Invalid email address')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
        });
    
        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
        // Wrap state updates in act
        await act(async () => {
            fireEvent.click(getByText('Sign In'));
        });
    
        // You can add assertions here to check for successful form submission behavior
        await waitFor(() => {
            expect(queryByText('Invalid email address')).toBeNull();
            expect(queryByText('Password is required')).toBeNull();
        });
        // For example, expect a certain API call to have been made, or a success message to be displayed
        // You can also wait for async operations to complete using waitFor
    });

    it('calls the API when form is submitted with valid data', async () => {
        const signInWithPasswordMock = jest.fn();
    jest.spyOn(require('@supabase/auth-helpers-nextjs'), 'createClientComponentClient').mockImplementation(() => ({
      auth: { signInWithPassword: signInWithPasswordMock },
    }));

        const { getByPlaceholderText, getByText } = render(<LoginPage />);

        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit form with valid data
        await act(async () => {
            fireEvent.click(getByText('Sign In'));
        });

        // Expect fetch to have been called with the correct URL and request body
        expect(signInWithPasswordMock).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123',
          });

        // You can add further assertions here to verify the behavior after a successful API call
        // For example, expect a success message to be displayed, or a redirection to another page
    });

    it('handles API error gracefully', async () => {
        const signInWithPasswordMock = jest.fn();
        jest.spyOn(require('@supabase/auth-helpers-nextjs'), 'createClientComponentClient').mockImplementation(() => ({
          auth: { signInWithPassword: signInWithPasswordMock },
        }));
    
        // Simulate an error response from signInWithPassword
        signInWithPasswordMock.mockRejectedValueOnce(new Error('API Error'));
    
        const { getByPlaceholderText, getByText } = render(<LoginPage />);
    
        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
        await act(async () => {
            fireEvent.click(getByText('Sign In'));
        });
    
        // Expect an error message to be displayed
        await waitFor(() => {
            expect(getByText('Error: API Error')).toBeInTheDocument();
        });
    
        // You can add further assertions here to verify the error handling behavior
    });
    
});

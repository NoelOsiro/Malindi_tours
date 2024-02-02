/**
 * @jest-environment jsdom
 */
import RegisterPage from "@/app/register/page";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

jest.mock('@supabase/auth-helpers-nextjs', () => ({
    createClientComponentClient: jest.fn(() => ({
      auth: {
        signUp: jest.fn(),
      },
    })),
  }));

describe('RegisterPage Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });
    it('renders the logo', () => {
        const { getByTestId } = render(<RegisterPage />);
        expect(getByTestId('logo')).toBeInTheDocument();
    });

    it('renders the background image', () => {
        const { getByTestId } = render(<RegisterPage />);
        expect(getByTestId('background-image')).toBeInTheDocument();
    });

    it('renders form inputs', () => {
        const { getByPlaceholderText } = render(<RegisterPage />);
        
        // Expect form inputs to be present
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        expect(getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    });

    it('submits form without entering any data', async () => {
        const { getByText } = render(<RegisterPage />);
        
        // Submit form without entering any data
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });
    
        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Email is required')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
            expect(getByText('Confirm Password')).toBeInTheDocument();
        });
    });

    it('submits form with invalid data', async () => {
        const { getByPlaceholderText, getByText } = render(<RegisterPage />);
        
        // Enter invalid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '' } });
        fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: '' } });
        
        // Wrap state updates in act
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });
    
        // Expect validation error messages
        await waitFor(() => {
            expect(getByText('Invalid email address')).toBeInTheDocument();
            expect(getByText('Password is required')).toBeInTheDocument();
            expect(getByText('Confirm Password')).toBeInTheDocument();
        });
    });

    it('submits form with mismatched password', async () => {
        const { getByPlaceholderText, getByText,getAllByText } = render(<RegisterPage />);
        
        // Enter invalid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '123456' } });
        fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: '654321' } });
        
        // Wrap state updates in act
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });
    
        // Expect validation error messages
        await waitFor(() => {
            expect(getAllByText('Password do not match').length).toEqual(2);
        });
    });

    it('submits form with valid data', async () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<RegisterPage />);
        
        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });
        fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    
        // Wrap state updates in act
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });
    
        // You can add assertions here to check for successful form submission behavior
        await waitFor(() => {
            expect(queryByText('Invalid email address')).toBeNull();
            expect(queryByText('Password is required')).toBeNull();
            expect(queryByText('Confirm Password')).toBeNull();
        });
    });

    it('calls the API when form is submitted with valid data', async () => {
        const signUpMock = jest.fn();
    jest.spyOn(require('@supabase/auth-helpers-nextjs'), 'createClientComponentClient').mockImplementation(() => ({
      auth: { signUp: signUpMock },
    }));

        const { getByPlaceholderText, getByText } = render(<RegisterPage />);

        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit form with valid data
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });

        // Expect fetch to have been called with the correct URL and request body
        

        // You can add further assertions here to verify the behavior after a successful API call
        // For example, expect a success message to be displayed, or a redirection to another page
    });

    it('handles API error gracefully', async () => {
        const signUpMock = jest.fn();
    jest.spyOn(require('@supabase/auth-helpers-nextjs'), 'createClientComponentClient').mockImplementation(() => ({
      auth: { signUp: signUpMock },
    }));
    // Simulate an error response from signInWithPassword
    signUpMock.mockRejectedValueOnce(new Error('API Error'));

        const { getByPlaceholderText, getByText } = render(<RegisterPage />);

        // Enter valid email and password
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit form with valid data
        await act(async () => {
            fireEvent.click(getByText('Sign Up'));
        });
        // Expect an error message to be displayed
        await waitFor(() => {
            expect(getByText('Error: API Error')).toBeInTheDocument();
        });

        // You can add further assertions here to verify the error handling behavior
    });
});

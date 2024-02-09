'use client'
import { ChangeEvent, MouseEvent, useState } from 'react';
import BackgroundSection from './components/BackgroundSection';
import LoginForm from './components/LoginForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const supabase = createClientComponentClient<Database>()
    // State for form fields
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // State for form errors
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    // State for loading status
    const [loading, setLoading] = useState(false);

    // State for displaying error message
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle form field changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        // Clear previous error and loading status
        setErrorMessage('');
        setLoading(true);
        // Perform form validation
        let errors = {
            email: '',
            password: '',
        };
        
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setLoading(false);
        }
        try {
            await supabase.auth.signInWithPassword(formData);
            // // If login is successful, you can redirect to another page
            // router.push('/dashboard');
        } catch (error:any) {
            setErrorMessage('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="">
            <section className="min-h-screen flex items-stretch text-white ">
                {/* Background Image Section */}
                <BackgroundSection />
                {/* Login Form Section */}
                <div className="lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16">
                    <div className="w-full py-6 z-20">
                        <h1 className="my-6" data-testid='logo'>
                            <svg viewBox="0 0 247 31" className="w-auto h-7 sm:h-8 inline-flex">
                                <path fill="rgba(99,102,241, .8)" fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"></path>
                            </svg>
                        </h1>
                        <div className="py-6 flex justify-between" style={{ marginLeft: "25%", marginRight: "25%" }}>
                            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
                            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
                            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
                        </div>
                        <p className="text-gray-100">
                            or use email your account
                        </p>
                        {loading && <p>Loading...</p>}
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                        <LoginForm
                            formData={formData}
                            formErrors={formErrors}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit} />

                    </div>

                </div>
            </section>
        </main>
    );
}



import React, { ChangeEvent, FormEvent, MouseEvent } from 'react';

interface LoginFormProps {
    formData: {
        email: string;
        password: string;
    };
    formErrors: {
        email: string;
        password: string;
    };
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ formData, formErrors, handleInputChange, handleSubmit }) => {
    return (
        <div >
            <h2 className="text-4xl font-semibold text-white mb-8">Welcome back!</h2>
            {/* Email input */}
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.email && (
                    <p className="text-red-500 mt-1">{formErrors.email}</p>
                )}
            </div>
            {/* Password input */}
            <div className="mb-6">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {formErrors.password && (
                    <p className="text-red-500 mt-1">{formErrors.password}</p>
                )}
            </div>
            {/* Submit button */}
            <button
                onClick={handleSubmit}
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Sign In
            </button>
        </div>
    );
}

export default LoginForm;

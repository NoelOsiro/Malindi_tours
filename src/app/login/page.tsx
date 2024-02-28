'use client'
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackgroundSection from '../../components/pages/login/BackgroundSection';
import LoginForm from '../../components/pages/login/LoginForm';
import Alert from '@/components/Alert/Alert';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client'


export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [formErrors, setFormErrors] = useState({ email: '', password: '' });
    const [alertMessage, setAlert] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (formData: { email: string; password: string }) => {
        let errors: { email: string; password: string } = { email: '', password: '' };

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        return Object.values(errors).some(error => error !== '') ? errors : null;
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const validationErrors = validateForm(formData);
            if (validationErrors !== null) {
                // There are validation errors
                setFormErrors(validationErrors);
                return;
            }
            const supabase = createClient();
            const { error } = await supabase.auth.signInWithPassword(formData);
            if (error) {
                setAlert(error.message); // Corrected: Passing error.message instead of the entire error object
            } else {
                router.push('/');
            }
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <main>
            <section className="min-h-screen flex items-stretch text-white">
                <BackgroundSection />
                <div className="lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16">
                    <div className="w-full py-6 z-20">
                        <div className="flex items-center justify-center mb-8 ">
                            <Image src="/beach.svg" alt="Malicul" className="mr-4" width={45} height={45} />
                            <h2 className="text-4xl font-semibold text-white">MaliCul</h2>
                        </div>
                        <h2 className="text-4xl font-semibold text-white mb-8">Welcome back!</h2>
                        {alertMessage && <Alert type={'error'} message={alertMessage}/>}
                        <LoginForm
                            formData={formData}
                            formErrors={formErrors}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            loading={loading}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

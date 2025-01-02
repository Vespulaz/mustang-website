'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/context/authcontext';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter();
    const { register } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Validate form
            if (!formData.email || !formData.username || !formData.password) {
                throw new Error('Please fill in all fields');
            }

            if (formData.password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }

            // Đăng ký thành công
            await register({
                email: formData.email,
                name: formData.username,
                password: formData.password
            });

            // Chuyển hướng về trang chủ
            router.push('/');
        } catch (err) {
            setError(err.message || 'An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img
                    src="https://static.vinwonders.com/production/Vietnamese-street-food-1.jpg"
                    alt="Street food"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-10 left-10 text-white">
                    <h2 className="text-3xl font-bold">MUSTÄNG</h2>
                    <p className="mt-2">Delicious food, delicious me</p>
                </div>
            </div>

            {/* Right side - Register Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="text-gray-600 hover:text-[#FF4500]">
                        ← Back to Home
                    </Link>
                    <h1 className="text-2xl font-bold text-[#FF4500]">MUSTÄNG</h1>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    <h2 className="text-2xl font-bold mb-2">Welcome</h2>
                    <p className="text-gray-600 mb-6">
                        Create account to send feedback, set your favorite restaurants, and so on!
                    </p>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF4500]"
                                placeholder="Enter your Email Address"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                User name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF4500]"
                                placeholder="Enter your User name"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF4500]"
                                    placeholder="Enter your Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required
                                    disabled={isLoading}
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF4500] text-white py-2 rounded-lg hover:bg-[#FF4500]/90 disabled:opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#FF4500] hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
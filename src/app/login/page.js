'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/context/authcontext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Giả lập API call
            // Trong thực tế, đây sẽ là call đến backend API của bạn
            await new Promise(resolve => setTimeout(resolve, 1000)); // giả lập delay

            // Kiểm tra credentials (demo)
            if (formData.email && formData.password) {
                // Login thành công
                login({
                    email: formData.email,
                    name: 'User Name',
                    // Thêm các thông tin user khác nếu cần
                });

                // Chuyển hướng về trang chủ
                router.push('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img
                    src="/images/login-bg.jpg"
                    alt="Login background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-10 left-10 text-white">
                    <h2 className="text-3xl font-bold">MUSTÄNG</h2>
                    <p className="mt-2">Discover the best street food in Ho Chi Minh City</p>
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16">
                <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="text-gray-600 hover:text-[#FF4500]">
                        ← Back to Home
                    </Link>
                    <h1 className="text-2xl font-bold text-[#FF4500]">MUSTÄNG</h1>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    <h2 className="text-2xl font-bold mb-6">Welcome back</h2>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF4500]"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required
                                    disabled={isLoading}
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

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    disabled={isLoading}
                                />
                                <span className="text-sm">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-sm text-[#FF4500] hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF4500] text-white py-2 rounded-lg hover:bg-[#FF4500]/90 disabled:opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Don&#39;t have an account?{' '}
                            <Link href="/register" className="text-[#FF4500] hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

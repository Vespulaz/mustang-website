'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập ở đây
        console.log('Login data:', formData);
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
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-[#FF4500] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF4500] text-white py-2 rounded-lg hover:bg-[#FF4500]/90"
                        >
                            Sign In
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?{' '}
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

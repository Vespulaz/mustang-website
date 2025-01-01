'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/authcontext';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
            <Link href="/" className="text-2xl font-bold text-[#FF4500]">
                MUSTANG
            </Link>

            {isAuthenticated ? (
                // Logged in header
                <nav className="flex gap-4">
                    <Link href="/add-review" className="text-gray-600 hover:text-[#FF4500]">
                        Add review
                    </Link>
                    <Link href="/favorites" className="text-gray-600 hover:text-[#FF4500]">
                        Favorite
                    </Link>
                    <Link href="/account" className="text-gray-600 hover:text-[#FF4500]">
                        Account
                    </Link>
                    <button
                        onClick={logout}
                        className="text-gray-600 hover:text-[#FF4500]"
                    >
                        Sign out
                    </button>
                </nav>
            ) : (
                // Not logged in header
                <div className="flex items-center">
                    <Link
                        href="/login"
                        className="text-gray-600 hover:text-[#FF4500] flex items-center h-10"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="bg-[#FF4500] text-white px-6 h-10 flex items-center ml-6 rounded hover:bg-[#FF4500]/90"
                    >
                        Create an account
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;

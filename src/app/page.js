'use client';
import React from 'react';
import Header from '@/components/header';
import Search from '@/components/search';
import RestaurantCard from '@/components/restaurantcard';
import { useAuth } from '@/context/authcontext';
import Footer from '@/components/footer';

const HomePage = () => {
    const { isAuthenticated } = useAuth();

    const restaurants = [
        {
            id: '1',
            name: 'Bánh Tráng Trộn & Cơ Ri Gà',
            location: 'District 1, Ho Chi Minh City',
            price: '35,000',
            image: '/images/banh-trang-tron.jpg'
        },
        {
            id: '2',
            name: 'Bún Chả Hà Nội',
            location: 'District 3, Ho Chi Minh City',
            price: '45,000',
            image: '/images/bun-cha.jpg'
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="bg-[#C84B31] text-white py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">MUSTANG</h1>
                <p className="text-xl">Find street food restaurant in Ho Chi Minh City</p>
            </div>

            {/* Search Section */}
            <div className="py-8">
                <Search />
            </div>

            {/* Restaurant Grid */}
            <div className="max-w-4xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {restaurants.map((restaurant, index) => (
                        <RestaurantCard
                            key={index}
                            {...restaurant}
                            showActions={isAuthenticated} // Chỉ hiện nút favorite khi đã đăng nhập
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

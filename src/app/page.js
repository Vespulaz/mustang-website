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
            name: 'KOI Thé - Vincom Center',
            location: 'Tầng Hầm 3,  B3 - 08 - 09 Vincom Center, 72 Lê Thánh Tôn, P. Bến Nghé,  Quận 1, TP. HCM',
            price: '60,000',
            image: 'https://down-vn.img.susercontent.com/vn-11134513-7ras8-m4g10fdgypb483@resize_ss576x330'
        },
        {
            id: '2',
            name: 'Bún Chả Hà Nội - Ẩm Thực Việt',
            location: '1144 Kha Vạn Cân, P. Linh Chiểu, Tp. Thủ Đức, TP. HCM',
            price: '45,000',
            image: 'https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwgaokscvaaj40@resize_ss576x330'
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <div className="relative">
                {/* Multiple overlay layers for better darkness control */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8EA]/10 to-[#FFF8EA]/50 z-10"></div>
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <div
                    className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: "url('https://static.vinwonders.com/production/Vietnamese-street-food-1.jpg')"
                    }}
                >
                    <div className="z-20 relative text-center">
                        <h1 className="text-4xl font-bold mb-4 text-white">MUSTANG</h1>
                        <p className="text-xl text-white">Find street food restaurant in Ho Chi Minh City</p>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="py-8">
                <Search/>
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

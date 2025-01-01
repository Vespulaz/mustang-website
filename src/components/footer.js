import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#FF4500] py-4 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo bên trái */}
                <div className="text-[#FFFFFF] font-bold text-2xl">
                    MUSTANG
                </div>

                {/* Copyright bên phải */}
                <div className="flex items-center text-[#FFFFFF]">
                    <span className="mr-2">©</span>
                    <span>All right reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
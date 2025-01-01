'use client';
import React, { useState } from 'react';
import Filter from './filters';

const Search = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'bun-cha', name: 'Bún chả' },
        { id: 'banh-trang-tron', name: 'Bánh tráng trộn' },
        { id: 'co-kho-them', name: 'Cơ khô thêm' },
        { id: 'bap-xao', name: 'Bắp xào' },
        { id: 'other', name: 'Other' }
    ];

    const handleCategoryClick = (categoryId, string) => {
        setSelectedCategory(categoryId);
    };


    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-semibold mb-6">Hôm nay bạn muốn ăn gì?</h2>

            {/* Search Input */}
            <div className="relative mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nhập tên món ăn..."
                    className="w-full p-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
                />
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {/* Filters */}
            <Filter />

            {/* Categories */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap
                            ${selectedCategory === category.id
                            ? 'bg-[#FF4500] text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Search;

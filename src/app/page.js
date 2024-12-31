'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link'; // Thêm import Link
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FOOD_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'bun-cha', name: 'Bún chả' },
  { id: 'banh-trang-tron', name: 'Bánh tráng trộn' },
  { id: 'com-kho-them', name: 'Cơ khô thêm' },
  { id: 'bap-xao', name: 'Bắp xào' },
  { id: 'other', name: 'Other' }
];

const FOOD_DATA = [
  {
    id: 1,
    title: 'Bánh Tráng Trộn & Cơ Ri Gà',
    address: 'District 1, Ho Chi Minh City',
    price: '35000',
    image: '/images/banh-trang-tron.jpg'
  },
  {
    id: 2,
    title: 'Bún Chả Hà Nội',
    address: 'District 3, Ho Chi Minh City',
    price: '45000',
    image: '/images/bun-cha.jpg'
  }
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
      <div className="min-h-screen flex flex-col">
        {/* Header - Thay đổi phần Login button */}
        <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
          <h1 className="text-2xl font-bold text-[#FF4500]">MUSTÄNG</h1>
          <div className="flex gap-4 items-center">
            <Link
                href="/login"
                className="text-gray-600 hover:text-[#FF4500]"
            >
              Login
            </Link>
            <Link
                href="/register"
                className="bg-[#FF4500] text-white px-6 py-2 rounded-md hover:bg-[#FF4500]/90"
            >
              Create an account
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-[#B84A1B] text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-2">MUSTANG</h1>
          <p className="text-xl">Find street food restaurant in Ho Chi Minh City</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto w-full px-6 -mt-6 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl mb-4">Hôm nay bạn muốn ăn gì?</h2>
            <div className="relative">
              <input
                  type="text"
                  placeholder="Nhập tên món ăn..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-[#FF4500]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Loại món" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {/* Add more options */}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Giá tiền" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25">Dưới 25.000đ</SelectItem>
                  {/* Add more options */}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Đánh giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {/* Add more options */}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Khoảng cách" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  {/* Add more options */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="bg-white py-6">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {FOOD_CATEGORIES.map((category) => (
                  <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${
                          category.id === 'all'
                              ? 'bg-[#FF4500] text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {category.name}
                  </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Cards */}
        <main className="flex-1 bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOOD_DATA.map((food) => (
                  <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <img
                          src={food.image}
                          alt={food.title}
                          className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{food.title}</h3>
                      <p className="text-gray-500 text-sm">{food.address}</p>
                      <p className="text-[#FF4500] font-medium mt-2">
                        {parseInt(food.price).toLocaleString()}đ
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white py-4 border-t">
          <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
            <div className="text-[#FF4500] font-bold">MUSTÄNG</div>
            <div className="text-gray-500 text-sm">© All right reserved</div>
          </div>
        </footer>
      </div>
  );
};

export default HomePage;

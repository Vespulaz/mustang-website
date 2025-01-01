'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, Upload } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

const AddReview = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        restaurantName: '',
        operatingTime: '',
        phoneNumber: '',
        address: '',
        comment: '',
        rating: 0,
        images: []
    });

    const [previewImages, setPreviewImages] = useState([]);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(prev => [...prev, ...previews]);
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement your submit logic here
        console.log('Form submitted:', formData);
        // Redirect after submission
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-[#FFF8EA]">
            <Header />
            {/* Hero Section */}
            <div className="relative h-[300px] bg-center bg-cover"
                 style={{backgroundImage: 'url(/images/review-hero.jpg)'}}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">
                        ADD YOUR REVIEW
                    </h1>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-3xl mx-auto px-4 py-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Restaurant Information */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold text-[#C84B31] mb-4">Restaurant Information</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name of restaurant
                                </label>
                                <input
                                    type="text"
                                    name="restaurantName"
                                    value={formData.restaurantName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C84B31]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Operating time
                                </label>
                                <input
                                    type="text"
                                    name="operatingTime"
                                    value={formData.operatingTime}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C84B31]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C84B31]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C84B31]"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Review Section */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-bold text-[#C84B31] mb-4">Your Review</h2>

                        {/* Rating */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Rating
                            </label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-8 h-8 cursor-pointer transition-colors ${
                                            star <= (hoveredRating || formData.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Comment
                            </label>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C84B31]"
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Add Photos
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {previewImages.map((preview, index) => (
                                    <div key={index} className="relative w-24 h-24">
                                        <Image
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                                <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#C84B31] transition-colors">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <Upload className="w-6 h-6 text-gray-400" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#C84B31] text-white py-3 rounded-lg font-medium hover:bg-[#A13926] transition-colors"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddReview;
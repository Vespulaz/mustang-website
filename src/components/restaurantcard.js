'use client';
import React from 'react';
import { Heart, Bookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const RestaurantCard = ({
                            id,  // Thêm id vào props
                            name,
                            location,
                            price,
                            image,
                            showActions = false,
                            onFavorite,
                            onBookmark
                        }) => {
    const handleFavorite = (e) => {
        e.preventDefault();
        if (onFavorite) onFavorite();
    };

    const handleBookmark = (e) => {
        e.preventDefault();
        if (onBookmark) onBookmark();
    };

    return (
        <Link
            href={`/restaurants/${id}`}  // Dynamic route dựa trên id
            className="block group"
        >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-48 w-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    />

                    {/* Action Buttons */}
                    {showActions && (
                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={handleFavorite}
                                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-md transition-all"
                                aria-label="Add to favorites"
                            >
                                <Heart className="w-5 h-5 text-[#C84B31]" />
                            </button>
                            <button
                                onClick={handleBookmark}
                                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-md transition-all"
                                aria-label="Bookmark"
                            >
                                <Bookmark className="w-5 h-5 text-[#C84B31]" />
                            </button>
                        </div>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-[#C84B31] font-medium text-sm">
              {price}đ
            </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-1">
                        📍 {location}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
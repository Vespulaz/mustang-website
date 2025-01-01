import React from 'react';
import { Heart, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ name, location, price, image, showActions = false }) => {
    const handleFavorite = (e) => {
        e.preventDefault();
        // Implement favorite logic here
        console.log('Added to favorites:', name);
    };

    const handleBookmark = (e) => {
        e.preventDefault();
        // Implement bookmark logic here
        console.log('Bookmarked:', name);
    };

    return (
        <Link to="/restaurant-details" className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover"
                    />

                    {/* Action Buttons */}
                    {showActions && (
                        <div className="absolute top-2 right-2 flex gap-2">
                            <button
                                onClick={handleFavorite}
                                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                aria-label="Add to favorites"
                            >
                                <Heart className="w-5 h-5 text-[#C84B31]" />
                            </button>
                            <button
                                onClick={handleBookmark}
                                className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                aria-label="Bookmark"
                            >
                                <Bookmark className="w-5 h-5 text-[#C84B31]" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{location}</p>
                    <p className="text-[#C84B31] font-medium">{price}đ</p>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
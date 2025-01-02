'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/authcontext';
import Header from '@/components/header';
import Footer from '@/components/footer';

const AccountPage = () => {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('http://localhost:5000/favorites', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFavorites(response.data);
            } catch (error) {
                console.error('Error fetching favorites', error);
                setError('Network Error: Unable to fetch favorites');
            }
        };

        fetchFavorites();
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Account Information</h1>
                        <p>Please log in to view your account information.</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Account Information</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-2xl font-bold mb-4">User Details</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Name:</strong> {user.name}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Favorite Restaurants</h2>
                        {error ? (
                            <p>{error}</p>
                        ) : favorites.length > 0 ? (
                            <ul>
                                {favorites.map((restaurant) => (
                                    <li key={restaurant._id} className="mb-4">
                                        <h3 className="text-xl font-bold">{restaurant.name}</h3>
                                        <p>{restaurant.location}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No favorite restaurants found.</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AccountPage;
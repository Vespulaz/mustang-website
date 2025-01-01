const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const fetchRestaurants = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/restaurants`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

export const fetchRestaurantById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        throw error;
    }
};

export const toggleFavorite = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/restaurants/${id}/favorite`, {
            method: 'POST',
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error toggling favorite:', error);
        throw error;
    }
};
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const restaurantService = {
    async getRestaurantById(id) {
        try {
            const response = await fetch(`${API_URL}/restaurants/${id}`);
            if (!response.ok) throw new Error('Restaurant not found');
            return await response.json();
        } catch (error) {
            console.error('Error fetching restaurant:', error);
            throw error;
        }
    },

    async getAllRestaurants() {
        try {
            const response = await fetch(`${API_URL}/restaurants`);
            if (!response.ok) throw new Error('Failed to fetch restaurants');
            return await response.json();
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            throw error;
        }
    },

    async searchRestaurants(query) {
        try {
            const response = await fetch(`${API_URL}/restaurants/search?q=${query}`);
            if (!response.ok) throw new Error('Search failed');
            return await response.json();
        } catch (error) {
            console.error('Error searching restaurants:', error);
            throw error;
        }
    }
};
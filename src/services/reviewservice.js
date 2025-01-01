const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const reviewService = {
    async submitReview(reviewData) {
        try {
            // Create FormData for handling file uploads
            const formData = new FormData();

            // Append text data
            Object.keys(reviewData).forEach(key => {
                if (key !== 'images') {
                    formData.append(key, reviewData[key]);
                }
            });

            // Append images
            reviewData.images.forEach((image, index) => {
                formData.append(`images`, image);
            });

            const response = await fetch(`${API_URL}/reviews`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            return await response.json();
        } catch (error) {
            console.error('Error submitting review:', error);
            throw error;
        }
    },

    async getReviewsByRestaurant(restaurantId) {
        try {
            const response = await fetch(`${API_URL}/reviews/restaurant/${restaurantId}`);
            if (!response.ok) throw new Error('Failed to fetch reviews');
            return await response.json();
        } catch (error) {
            console.error('Error fetching reviews:', error);
            throw error;
        }
    }
};
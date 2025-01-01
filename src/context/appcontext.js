import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    const addToFavorites = (restaurantId) => {
        setFavorites(prev => [...prev, restaurantId]);
    };

    const removeFromFavorites = (restaurantId) => {
        setFavorites(prev => prev.filter(id => id !== restaurantId));
    };

    const addToBookmarks = (restaurantId) => {
        setBookmarks(prev => [...prev, restaurantId]);
    };

    const removeFromBookmarks = (restaurantId) => {
        setBookmarks(prev => prev.filter(id => id !== restaurantId));
    };

    return (
        <AppContext.Provider value={{
            favorites,
            bookmarks,
            addToFavorites,
            removeFromFavorites,
            addToBookmarks,
            removeFromBookmarks,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
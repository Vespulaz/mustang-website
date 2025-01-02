import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        // Logic đăng nhập
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('http://localhost:5000/register', userData);
            setUser(response.data.user);
        } catch (error) {
            console.error('Error during registration', error);
        }
    };

    const logout = () => {
        setUser(null);
        // Logic đăng xuất
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
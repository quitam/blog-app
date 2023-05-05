import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async (user) => {
        const res = await axios.post('/auth/login', user);
        setCurrentUser(res.data);
        return res;
    };
    const logout = async () => {
        await axios.post('/auth/logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ login, logout, currentUser }}>{children}</AuthContext.Provider>;
};

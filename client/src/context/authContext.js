import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar } from '@mui/material';

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
    const ContextAvatar = () => {
        const stringToColor = (name) => {
            let hash = 0;
            let i;

            /* eslint-disable no-bitwise */
            for (i = 0; i < name.length; i += 1) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }

            let color = '#';

            for (i = 0; i < 3; i += 1) {
                const value = (hash >> (i * 8)) & 0xff;
                color += `00${value.toString(16)}`.slice(-2);
            }
            /* eslint-enable no-bitwise */
            return color;
        };

        const stringAvatar = (name) => {
            return {
                sx: {
                    cursor: 'pointer',
                    bgcolor: stringToColor(name),
                    width: 40,
                    height: 40,
                },
                children: `${name.split(' ')[0][0]}${name.split(' ')[name.split(' ').length - 1][0]}`,
            };
        };
        return <Avatar src={currentUser.avatar} {...stringAvatar(currentUser.fullname)} />;
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ login, logout, currentUser, ContextAvatar }}>{children}</AuthContext.Provider>
    );
};

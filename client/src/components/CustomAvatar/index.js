import React from 'react';
import { Avatar } from '@mui/material';

const CustomAvatar = ({ avatar, fullname }) => {
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

    const stringAvatar = (fullname) => {
        const array = fullname.split(' ');

        return {
            sx: {
                cursor: 'pointer',
                bgcolor: stringToColor(fullname),
                width: 40,
                height: 40,
            },
            children: `${array[0][0]}${array[array.length - 1][0]}`,
        };
    };
    return <Avatar src={avatar} {...stringAvatar(fullname)} />;
};

export default CustomAvatar;

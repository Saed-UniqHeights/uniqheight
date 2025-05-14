import React from 'react';

const AppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            {...props}
        >
            <rect width="24" height="24" rx="4" fill="#4CAF50" />
            <path
                d="M12 7C9.79 7 8 8.79 8 11C8 13.21 9.79 15 12 15C14.21 15 16 13.21 16 11C16 8.79 14.21 7 12 7ZM12 13.5C10.9 13.5 10 12.6 10 11.5C10 10.4 10.9 9.5 12 9.5C13.1 9.5 14 10.4 14 11.5C14 12.6 13.1 13.5 12 13.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="white"
            />
        </svg>
    );
};

export default AppIcon;
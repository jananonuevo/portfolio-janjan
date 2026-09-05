import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export function Button({ variant = 'outline', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:ring-4 focus:outline-none transition-colors duration-200 cursor-pointer";
    const variants = {
        primary: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
        outline: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

import React from 'react';

const Badge = ({ children, className = "" }) => {
    return (
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-white border border-slate-700 transition-all duration-200 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 hover:shadow-md cursor-default ${className}`}>
            {children}
        </span>
    );
};

export default Badge;


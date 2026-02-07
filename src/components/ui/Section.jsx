import React from 'react';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 sm:py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="max-w-2xl mx-auto text-lg text-slate-400">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;

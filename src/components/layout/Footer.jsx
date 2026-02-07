import React from 'react';
import { resume } from '../../data/resume';

const Footer = () => {
    return (
        <footer className="bg-slate-900/70 backdrop-blur-sm border-t border-teal-500/20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="flex space-x-6 mb-4">
                    {resume.personalInfo.social.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                            aria-label={item.name}
                        >
                            <item.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

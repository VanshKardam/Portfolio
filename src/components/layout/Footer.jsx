import React from 'react';
import { resume } from '../../data/resume';

const Footer = () => {
    return (
        <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-teal-500/20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} {resume.personalInfo.name}. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    {resume.personalInfo.social.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                                aria-label={item.name}
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

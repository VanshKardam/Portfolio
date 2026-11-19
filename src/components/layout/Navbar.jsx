import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { resume } from '../../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl z-50 border-b border-teal-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="text-gradient">{resume.personalInfo.displayName || "Vansh"}</span>
                            <span className="text-slate-400 font-normal text-sm hidden sm:inline">| Portfolio</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-baseline space-x-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-teal-400 px-2 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Resume button opening directly in new tab */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-teal-300 border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 hover:text-white transition-all duration-200"
                        >
                            <FileText size={14} />
                            <span>Resume</span>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-teal-400 focus:outline-none transition-colors duration-200"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-teal-500/20">
                    <div className="px-3 pt-2 pb-4 space-y-2 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-teal-300 border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20"
                            onClick={() => setIsOpen(false)}
                        >
                            <FileText size={16} />
                            <span>View Resume (PDF)</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

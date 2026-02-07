import React from 'react';
import { resume } from '../data/resume';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { name, subtitle, summary } = resume.personalInfo;

    return (
        <section className="relative pt-28 pb-16 sm:pb-24 lg:pb-32 flex items-center justify-center min-h-[90vh] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Text Content */}
                    <motion.div
                        className="text-center lg:text-left lg:flex-1"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
                        >
                            Hi, I'm <span className="text-gradient">{name}</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 max-w-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.4 }}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.p
                            className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
                        >
                            {summary}
                        </motion.p>

                        {/* 2 Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.6 }}
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-1 hover:shadow-teal-500/50"
                            >
                                View Work
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-600 text-base font-medium rounded-xl text-slate-200 bg-slate-800/50 backdrop-blur-sm hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
                            >
                                <FileText className="mr-2 h-5 w-5" />
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Photo */}
                    <motion.div
                        className="lg:flex-shrink-0"
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
                    >
                        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-teal-600/30 to-blue-600/30 flex items-center justify-center overflow-hidden ring-4 ring-teal-500/30 shadow-2xl shadow-teal-500/20">
                            <img
                                src="/profile.jpg"
                                alt={name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-6xl text-slate-500">👤</span>';
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { resume } from '../data/resume';
import { ArrowRight, FileText, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { name, displayName, subtitle, summary } = resume.personalInfo;

    return (
        <section className="relative pt-32 pb-16 sm:pb-24 lg:pb-32 flex items-center justify-center min-h-[90vh] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="text-center lg:text-left lg:flex-1"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
                    >
                        {/* Pill badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium mb-4"
                        >
                            <Sparkles size={14} className="text-teal-400" />
                            <span>Full-Stack & Generative AI Engineer</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
                        >
                            Hi, I'm <span className="text-gradient">{displayName || name}</span>
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
                            className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.5 }}
                        >
                            {summary}
                        </motion.p>

                        {/* Quick Highlights Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 text-xs font-semibold text-slate-300"
                        >
                            <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-teal-500/30 text-teal-300">
                                ⚡ LeetCode 1832
                            </span>
                            <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-cyan-500/30 text-cyan-300">
                                🏆 Codeforces 1382 (Pupil)
                            </span>
                            <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300">
                                🎯 700+ DSA Problems
                            </span>
                            <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-emerald-500/30 text-emerald-300">
                                🤖 Agentic AI & RAG
                            </span>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.6 }}
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-7 py-3 text-sm sm:text-base font-semibold rounded-xl text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-1 hover:shadow-teal-500/50"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#experience"
                                className="inline-flex items-center justify-center px-6 py-3 border border-teal-500/40 text-sm sm:text-base font-semibold rounded-xl text-teal-300 bg-slate-800/60 backdrop-blur-sm hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
                            >
                                <Briefcase className="mr-2 h-4 w-4 text-teal-400" />
                                Experience
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-sm sm:text-base font-semibold rounded-xl text-slate-200 bg-slate-800/40 backdrop-blur-sm hover:border-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                <FileText className="mr-2 h-4 w-4" />
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
                        <div className="relative">
                            <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-teal-600/30 to-blue-600/30 flex items-center justify-center overflow-hidden ring-4 ring-teal-500/30 shadow-2xl shadow-teal-500/20">
                                <img
                                    src="/profile.jpg"
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<span class="text-7xl text-slate-500">👨‍💻</span>';
                                    }}
                                />
                            </div>
                            {/* Decorative badge around photo */}
                            <div className="absolute -bottom-2 right-4 bg-slate-900/90 backdrop-blur-md border border-teal-500/40 text-teal-300 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                                🎓 IIITM Gwalior '27
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

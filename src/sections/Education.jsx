import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-4xl mx-auto space-y-6">
                {resume.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.1 }}
                    >
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 to-blue-500/50 -ml-px"></div>

                        <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block md:w-5/12"></div>

                            {/* Dot on timeline */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-4 border-slate-900 shadow-lg shadow-teal-500/30 -ml-2 mt-1.5 md:mt-0"></div>

                            {/* Content */}
                            <div className="md:w-5/12 bg-slate-800/60 backdrop-blur-xl p-6 rounded-xl border border-teal-500/20 shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-white">{edu.institute}</h3>
                                    {edu.current && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center text-slate-400 text-sm mb-3">
                                    <GraduationCap size={16} className="mr-2 text-teal-400" />
                                    <span>{edu.degree}</span>
                                </div>
                                <div className="flex items-center text-slate-400 text-sm mb-4">
                                    <Calendar size={16} className="mr-2 text-cyan-400" />
                                    <span>{edu.year}</span>
                                </div>
                                <div className="font-semibold text-slate-200 text-sm">
                                    {edu.score}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;

import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <Section id="education" title="Education" subtitle="Academic background and institution.">
            <div className="max-w-3xl mx-auto space-y-6">
                {resume.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 18 }}
                        className="bg-slate-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-teal-500/20 shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                    {edu.institute}
                                </h3>
                                <div className="flex items-center text-slate-300 text-sm sm:text-base mt-1.5">
                                    <GraduationCap size={18} className="mr-2 text-teal-400 shrink-0" />
                                    <span>{edu.degree}</span>
                                </div>
                            </div>
                            {edu.current && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 self-start sm:self-auto">
                                    Current
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-3 border-t border-slate-700/50">
                            <div className="flex items-center">
                                <Calendar size={16} className="mr-2 text-cyan-400" />
                                <span>{edu.year}</span>
                            </div>
                            <div className="flex items-center text-slate-200 font-semibold bg-slate-900/50 px-3 py-1 rounded-lg border border-slate-700/60">
                                <Award size={16} className="mr-2 text-teal-400" />
                                <span>{edu.score}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;

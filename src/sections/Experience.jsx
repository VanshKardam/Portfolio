import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Section id="experience" title="Work Experience" subtitle="Professional software engineering and internship experience.">
            <div className="max-w-4xl mx-auto space-y-8">
                {resume.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.1 }}
                        className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-teal-500/20 shadow-xl hover:border-teal-500/40 hover:shadow-teal-500/10 transition-all duration-300 group"
                    >
                        {/* Top banner / header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-700/50">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg text-teal-400">
                                        <Briefcase size={20} />
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                </div>
                                <p className="text-lg font-medium text-slate-300 mt-1 flex items-center gap-2">
                                    <span>{exp.company}</span>
                                    {exp.workType && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                            {exp.workType}
                                        </span>
                                    )}
                                </p>
                            </div>

                            <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-400">
                                <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
                                    <Calendar size={15} />
                                    {exp.period}
                                </span>
                                {exp.certificateUrl && (
                                    <span className="inline-flex items-center text-xs text-slate-400 hover:text-teal-300 transition-colors">
                                        <ExternalLink size={12} className="mr-1" />
                                        Verified Internship
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        {exp.description && (
                            <p className="text-slate-300 text-sm sm:text-base mb-5 italic">
                                {exp.description}
                            </p>
                        )}

                        {/* Bullet points */}
                        <ul className="space-y-3 mb-6">
                            {exp.points.map((point, pIndex) => (
                                <li key={pIndex} className="flex items-start text-slate-300 text-sm sm:text-base leading-relaxed">
                                    <CheckCircle2 size={18} className="text-teal-400 mr-3 mt-1 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {exp.techStack.map((tech, tIndex) => (
                                <span
                                    key={tIndex}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/60 text-slate-300 border border-slate-600/70 hover:border-teal-500/50 hover:text-teal-300 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;

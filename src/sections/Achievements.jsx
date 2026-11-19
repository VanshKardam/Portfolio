import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Trophy, Award, Code, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
};

const Achievements = () => {
    return (
        <Section id="achievements" title="Achievements & Certifications" subtitle="Competitive coding milestones, specialized programs, and certifications.">
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {resume.achievements.map((item, index) => {
                    const IconComponent = item.icon || Trophy;
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-teal-500/20 shadow-xl hover:border-teal-500/40 hover:shadow-teal-500/20 transition-all duration-300 flex flex-col justify-between h-full group"
                        >
                            <div>
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl text-teal-400 group-hover:scale-110 transition-transform">
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Title & Overview */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Numerical Stat Box (cleanly fitted with no text wrapping issues) */}
                                {item.stats && item.stats.length > 0 && (
                                    <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-slate-900/70 border border-slate-700/60">
                                        {item.stats.map((stat, sIndex) => (
                                            <div key={sIndex} className="text-center px-1">
                                                <div className="text-lg sm:text-xl font-extrabold text-gradient leading-tight">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[11px] text-slate-400 font-medium mt-1 leading-tight">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights (clean bullet points with check icons) */}
                                {item.highlights && item.highlights.length > 0 && (
                                    <ul className="space-y-2.5 my-4">
                                        {item.highlights.map((point, pIndex) => (
                                            <li key={pIndex} className="flex items-start text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                <CheckCircle2 size={15} className="text-teal-400 mr-2 mt-0.5 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Tags pill row at bottom - pinned horizontally across cards */}
                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-auto border-t border-slate-700/50">
                                    {item.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/50 text-slate-300 border border-slate-700/70 whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Achievements;

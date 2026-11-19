import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Coursework = () => {
    return (
        <Section id="coursework" title="Relevant Coursework" subtitle="Core computer science academic curriculum.">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {resume.coursework.map((course, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-teal-500/20 shadow-md flex flex-col items-center justify-center text-center hover:shadow-teal-500/10 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 min-h-[90px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.05 }}
                        >
                            <BookOpen size={20} className="text-teal-400 mb-2 shrink-0" />
                            <span className="font-medium text-slate-200 text-xs sm:text-sm leading-snug">{course}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Coursework;

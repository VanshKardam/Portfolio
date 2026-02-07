import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Coursework = () => {
    return (
        <Section id="coursework" title="Relevant Coursework">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {resume.coursework.map((course, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-teal-500/20 shadow-md flex items-center justify-center text-center hover:shadow-teal-500/10 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.03 }}
                        >
                            <BookOpen size={18} className="text-teal-400 mr-2 shrink-0" />
                            <span className="font-medium text-slate-200 text-sm">{course}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Coursework;

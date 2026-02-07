import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
};

const badgeContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15 } }
};

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with.">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {resume.skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-teal-500/20 shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg text-teal-400 mr-3">
                                <skillGroup.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                        </div>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={badgeContainerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skillGroup.items.map((skill, skillIndex) => (
                                <motion.span
                                    key={skillIndex}
                                    variants={badgeVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgb(20, 184, 166)",
                                        color: "white",
                                        boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)"
                                    }}
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-slate-700/80 text-slate-200 border border-slate-600 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Skills;

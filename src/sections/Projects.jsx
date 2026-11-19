import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
};

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects" subtitle="Cutting-edge GenAI systems, multi-agent architectures, and full-stack applications.">
            <motion.div
                className="space-y-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {resume.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-teal-500/20 overflow-hidden shadow-xl hover:shadow-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                        <div className="p-6 md:p-8">
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.badge && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                                <Sparkles size={12} />
                                                {project.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-300 text-sm sm:text-base mt-1.5 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* GitHub & Demo action buttons */}
                                <div className="flex items-center gap-3 shrink-0">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-700/60 hover:bg-teal-500/20 hover:text-teal-300 hover:border-teal-500/40 border border-slate-600 transition-all duration-200"
                                            aria-label={`View ${project.title} on GitHub`}
                                        >
                                            <Github size={16} />
                                            <span>Repository</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Tech Stack tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 text-teal-300 border border-teal-500/30 hover:bg-teal-500/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Detailed bullet points */}
                            <div className="bg-slate-900/40 rounded-xl p-4 sm:p-5 border border-slate-700/40">
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">Key Technical Highlights</h4>
                                <ul className="space-y-2.5">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                                            <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Subtle ambient hover background glow */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.06), rgba(56,189,248,0.06))' }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;

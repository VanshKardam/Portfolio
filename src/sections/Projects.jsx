import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Github } from 'lucide-react';
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
};

const Projects = () => {
    return (
        <Section id="projects" title="Featured Work" subtitle="Projects I'm proud of.">
            <motion.div
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {resume.projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={item}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="block relative bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-teal-500/20 overflow-hidden shadow-lg hover:shadow-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group cursor-pointer"
                    >
                        {/* GitHub icon in top right */}
                        <button
                            type="button"
                            className="absolute top-4 right-4 p-3 text-slate-400 hover:text-teal-400 bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:bg-slate-600/50 z-10"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.links.github, '_blank');
                            }}
                            aria-label="View on GitHub"
                        >
                            <Github size={20} />
                        </button>

                        <div className="p-6 md:p-8">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{project.title}</h3>
                                <p className="text-slate-400 mt-1">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-2">
                                {project.points.slice(0, 3).map((point, i) => (
                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gradient hover overlay */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(56,189,248,0.08))' }}></div>
                    </motion.a>
                ))}
            </motion.div>
        </Section>
    );
};

export default Projects;

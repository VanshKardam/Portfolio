import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" subtitle="Open to software engineering opportunities, collaborations, and discussions." className="mb-16">
            <motion.div
                className="max-w-4xl mx-auto bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-teal-500/20 shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
                {/* Primary Contacts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <a
                        href={`mailto:${resume.personalInfo.email}`}
                        className="flex items-center p-5 rounded-xl bg-slate-900/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <Mail size={22} />
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">Email</h3>
                            <p className="text-white font-medium text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                                {resume.personalInfo.email}
                            </p>
                        </div>
                    </a>

                    <a
                        href={`tel:${resume.personalInfo.phone}`}
                        className="flex items-center p-5 rounded-xl bg-slate-900/50 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <Phone size={22} />
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">Phone</h3>
                            <p className="text-white font-medium text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                                {resume.personalInfo.phone}
                            </p>
                        </div>
                    </a>
                </div>

                {/* Profiles & Links */}
                <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 text-center mb-5">
                        Profiles & Coding Platforms
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {resume.personalInfo.social
                            .filter(s => s.name !== 'Email')
                            .map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/40 border border-slate-700/60 hover:border-teal-500/40 hover:bg-slate-700/30 transition-all duration-300 group"
                                    >
                                        <div className="text-slate-400 group-hover:text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                                            <Icon size={22} />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>
                                    </a>
                                );
                            })}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;

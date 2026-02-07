import React from 'react';
import Section from '../components/ui/Section';
import { resume } from '../data/resume';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's connect for opportunities or collaborations." className="mb-16">
            <motion.div
                className="max-w-3xl mx-auto bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-teal-500/20 shadow-xl text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href={`mailto:${resume.personalInfo.email}`} className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-500/30">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <p className="text-slate-400 text-sm">{resume.personalInfo.email}</p>
                    </a>

                    <a href={`tel:${resume.personalInfo.phone}`} className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <p className="text-slate-400 text-sm">{resume.personalInfo.phone}</p>
                    </a>

                    <a href={resume.personalInfo.social.find(s => s.name === 'LinkedIn')?.url || '#'} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                        <p className="text-slate-400 text-sm">Connect with me</p>
                    </a>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;

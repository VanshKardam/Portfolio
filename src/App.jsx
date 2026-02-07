import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Coursework from './sections/Coursework';
import Contact from './sections/Contact';

// Animated Aurora Background Blobs - Dark Blue & Green
const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Deep Teal Blob - Top Left */}
            <motion.div
                className="aurora-blob w-[700px] h-[700px] bg-teal-600 -top-64 -left-64 md:w-[900px] md:h-[900px]"
                style={{ position: 'absolute' }}
                animate={{
                    scale: [1, 1.15, 1.05, 1.2, 1],
                    x: [0, 50, 20, 40, 0],
                    y: [0, 30, 50, 20, 0],
                    rotate: [0, 5, -5, 3, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Deep Blue Blob - Bottom Right */}
            <motion.div
                className="aurora-blob w-[600px] h-[600px] bg-blue-700 -bottom-48 -right-48 md:w-[800px] md:h-[800px]"
                style={{ position: 'absolute' }}
                animate={{
                    scale: [1, 1.2, 1.1, 1.15, 1],
                    x: [0, -40, -20, -50, 0],
                    y: [0, -50, -30, -40, 0],
                    rotate: [0, -8, 5, -3, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Emerald Green Blob - Center */}
            <motion.div
                className="aurora-blob w-[500px] h-[500px] bg-emerald-700 top-1/2 left-1/3 md:w-[600px] md:h-[600px]"
                style={{ position: 'absolute' }}
                animate={{
                    scale: [1, 1.1, 1.2, 1.05, 1],
                    x: [0, 60, -30, 40, 0],
                    y: [0, -40, 30, -20, 0],
                    rotate: [0, 10, -5, 8, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Cyan Accent Blob - Top Right */}
            <motion.div
                className="aurora-blob w-[400px] h-[400px] bg-cyan-600 -top-32 right-1/4 md:w-[500px] md:h-[500px]"
                style={{ position: 'absolute' }}
                animate={{
                    scale: [1, 1.25, 1.1, 1.2, 1],
                    x: [0, -30, 20, -40, 0],
                    y: [0, 40, 60, 30, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />
        </div>
    );
};

function App() {
    return (
        <div className="min-h-screen text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-100 relative">
            {/* Aurora Background */}
            <AuroraBackground />

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Education />
                    <Coursework />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;

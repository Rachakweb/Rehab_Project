import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Process from './components/Process';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="relative">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Process />
                <Contact />
                {/* Further sections like Services, Process, Contact will follow */}
                <section className="bg-primary-dark py-20 text-white text-center">
                    <div className="container">
                        <h2 className="text-white text-4xl mb-6">Ready to make a change?</h2>
                        <p className="text-white/80 text-lg mb-10">Contact us today for a confidential consultation.</p>
                        <a href="tel:9006444666" className="btn bg-white text-primary-dark hover:bg-bg">
                            Get Help Now
                        </a>
                    </div>
                </section>
            </main>

            <footer className="py-12 bg-white border-t border-slate-200">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div>
                            <span className="text-2xl font-bold text-primary-dark">DUNAM LIFE LINE</span>
                            <p className="text-[#64748b] mt-2">184, Master compound doranda ranchi 2 (JHARKHAND) 834002</p>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-primary">Facebook</a>
                            <a href="#" className="hover:text-primary">Twitter</a>
                            <a href="#" className="hover:text-primary">Instagram</a>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-100 text-center text-[#94a3b8] text-sm">
                        &copy; 2026 Dunam Life Line Foundation. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

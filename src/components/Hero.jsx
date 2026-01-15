import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Activity, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150 translate-x-1/4">
                    <path fill="#0f766e" d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.3C86.3,-32.1,90.7,-16.4,89.5,-1.2C88.3,14.1,81.4,28.2,72,40.1C62.6,52,50.7,61.7,37.3,69.5C23.9,77.3,9,83.1,-5.6,81.3C-20.2,79.5,-34.5,70.1,-47.4,60.2C60.3,50.3,-71.8,40,-78.9,26.9C-86,13.8,-88.7,-2,-85.4,-16.6C-82.1,-31.2,-72.8,-44.6,-60.7,-52.8C-48.6,-61,-33.7,-64,-20.1,-71.2C-6.5,-78.4,5.9,-89.8,22.3,-83.6C38.7,-77.4,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6"
                        >
                            <ShieldCheck size={18} />
                            Trusted Rehabilitation Excellence
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Begin Your Journey to <span className="text-primary-light">A New Hope</span>
                        </h1>
                        <p className="text-lg text-[#64748b] mb-10 max-w-lg">
                            Dunam Life Line Foundation provides personalized, compassionate care to help you overcome addiction and reclaim your life. Your transformation starts today.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary">
                                Consult Expert Now
                                <ChevronRight size={20} />
                            </button>
                            <button className="btn btn-outline">
                                Our Programs
                            </button>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-dark">150+</span>
                                <span className="text-sm text-[#94a3b8]">Successful Recoveries</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-dark">12+</span>
                                <span className="text-sm text-[#94a3b8]">Expert Therapists</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary-dark">24/7</span>
                                <span className="text-sm text-[#94a3b8]">Medical Support</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                                alt="Rehabilitation Support"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                        </div>

                        {/* Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Activity size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#94a3b8]">Health Pulse</p>
                                <p className="text-sm font-bold text-primary-dark">Holistic Care</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#94a3b8]">Expert Team</p>
                                <p className="text-sm font-bold text-primary-dark">Compassionate Staff</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

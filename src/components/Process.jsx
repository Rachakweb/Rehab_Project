import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Droplets, FerrisWheel, Utensils, Truck, Anchor } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            title: "Intake & Assessment",
            desc: "Detailed medical and psychological evaluation to create a custom plan.",
            icon: <ClipboardCheck size={28} />,
            status: "Step 01"
        },
        {
            title: "Supervised Detox",
            desc: "Medically managed withdrawal in a safe, caring environment.",
            icon: <Droplets size={28} />,
            status: "Step 02"
        },
        {
            title: "Therapeutic Support",
            desc: "Individual and group sessions to address rooted behaviors.",
            icon: <FerrisWheel size={28} />,
            status: "Step 03"
        },
        {
            title: "Nutritional Care",
            desc: "Healthy, home-cooked meals to restore physical vitality.",
            icon: <Utensils size={28} />,
            status: "Step 04"
        },
        {
            title: "Seamless Logistics",
            desc: "Safe pick-up and drop services for stress-free transit.",
            icon: <Truck size={28} />,
            status: "Step 05"
        },
        {
            title: "Relapse Prevention",
            desc: "Equipping you with tools for long-term sobriety and aftercare.",
            icon: <Anchor size={28} />,
            status: "Step 06"
        }
    ];

    return (
        <section id="process" className="bg-primary-dark py-24 text-white">
            <div className="container">
                <div className="section-title text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-4xl mb-4"
                    >
                        Your Path to <span className="text-primary-light">Independence</span>
                    </motion.h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Our structured 6-step recovery journey ensures every aspect of your well-being is addressed with professional care.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-xl border-4 border-primary-dark ring-8 ring-white/5">
                                    {step.icon}
                                </div>
                                <span className="text-primary-light font-bold text-xs tracking-widest uppercase mb-3">{step.status}</span>
                                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                                <p className="text-sm text-white/50">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;

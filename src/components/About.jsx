import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const points = [
        "Personalized Detoxification Programs",
        "Evidence-Based Psychological Support",
        "Holistic Healing (Yoga & Meditation)",
        "Comfortable & Secure Environment",
        "24/7 Dedicated Nursing Care",
        "Comprehensive Aftercare Support"
    ];

    return (
        <section id="about" className="bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                                alt="Medical Professional"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 glass-card p-8 hidden md:block">
                            <p className="text-primary font-bold text-xl">Ajay Bhasker</p>
                            <p className="text-[#64748b] text-sm">Founder & Director</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Restoring Lives with <span className="text-primary">Compassion and Care</span></h2>
                        <p className="text-lg text-[#64748b] mb-6">
                            At Dunam Life Line Foundation, we believe that every individual deserves a second chance at a healthy, fulfilling life. Founded by <strong>Ajay Bhasker</strong>, our mission is to provide a sanctuary for those battling addiction.
                        </p>
                        <p className="text-lg text-[#64748b] mb-8">
                            We combine medical expertise with spiritual and psychological support to ensure a holistic recovery journey. Our facility in Ranchi is equipped with modern amenities to provide a safe and comfortable path to sobriety.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={20} />
                                    <span className="font-semibold text-primary-dark">{point}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary mt-10">
                            Learn More About Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

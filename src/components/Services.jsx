import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Pill, Brain, Heart, Sun, MapPin } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Alcohol De-Addiction",
            desc: "Comprehensive withdrawal management and therapy for sustainable sobriety.",
            icon: <Wine className="text-primary" size={32} />,
            color: "bg-teal-50"
        },
        {
            title: "Drug Rehabilitation",
            desc: "Specialized programs for various substance dependencies with medical supervision.",
            icon: <Pill className="text-secondary" size={32} />,
            color: "bg-blue-50"
        },
        {
            title: "Mental Health Support",
            desc: "Expert counseling for depression, anxiety, and trauma-related issues.",
            icon: <Brain className="text-purple-500" size={32} />,
            color: "bg-purple-50"
        },
        {
            title: "Holistic Healing",
            desc: "Integrating Yoga, Meditation, and Art therapy for spiritual wellness.",
            icon: <Sun className="text-orange-500" size={32} />,
            color: "bg-orange-50"
        },
        {
            title: "Medical Detox",
            desc: "Safe and controlled detoxification process under 24/7 expert care.",
            icon: <Activity className="text-red-500" size={32} />,
            color: "bg-red-50"
        },
        {
            title: "Recreational Therapy",
            desc: "Engaging activities to rebuild social skills and physical health.",
            icon: <Heart className="text-pink-500" size={32} />,
            color: "bg-pink-50"
        }
    ];

    return (
        <section id="services" className="bg-bg">
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Specialist <span className="text-primary">Medical Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We offer a wide range of treatment programs tailored to individual needs for effective and long-lasting recovery.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 flex flex-col items-center text-center group transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-[#64748b] mb-6">{service.desc}</p>
                            <button className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ChevronRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Internal components to avoid import issues for icons not defined
const Activity = ({ className, size }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
);

const ChevronRight = ({ className, size }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
);

export default Services;

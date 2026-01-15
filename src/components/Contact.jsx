import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-white overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Contact Us Anytime for <span className="text-primary">Support</span></h2>
                        <p className="text-lg text-[#64748b] mb-10">
                            Our compassionate team is available 24/7 to answer your questions and help you take the first step towards recovery.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Phone className="text-primary" />, title: "Phone", content: "+91 9006444666", sub: "Available 24/7 for emergencies" },
                                { icon: <Mail className="text-primary" />, title: "Email", content: "ajaybhasker79567@gmail.com", sub: "General Inquiries" },
                                { icon: <MapPin className="text-primary" />, title: "Location", content: "184, Master compound doranda ranchi 2 (JHARKHAND) 834002", sub: "Visit our facility" }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-primary-dark">{item.title}</h4>
                                        <p className="text-slate-800 font-semibold">{item.content}</p>
                                        <p className="text-sm text-slate-500">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 glass-card p-6 bg-primary/5 border-primary/20">
                            <div className="flex items-center gap-4">
                                <MessageSquare className="text-primary" />
                                <p className="text-primary-dark font-bold">Need a quick answer? Chat with us on WhatsApp.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10"
                    >
                        <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="+91 XXX XXX XXXX" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white">
                                    <option>General Inquiry</option>
                                    <option>Admission Process</option>
                                    <option>Treatment Programs</option>
                                    <option>Emergency Help</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Your Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="btn btn-primary w-full justify-center">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

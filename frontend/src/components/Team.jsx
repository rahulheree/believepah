import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
    const team = [
        {
            name: "Dr. Sarah Chen",
            role: "CEO & Co-Founder",
            bio: "Former Google Health AI lead, PhD in Clinical Psychology. 10+ years in digital health innovation.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO & Co-Founder",
            bio: "Ex-Meta AI researcher, NLP specialist. Built conversational AI for 50M+ users.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
        },
        {
            name: "Dr. Priya Patel",
            role: "Chief Clinical Officer",
            bio: "Licensed psychiatrist, digital therapy pioneer. Published researcher in CBT outcomes.",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400"
        }
    ];

    return (
        <section className="py-20 bg-slate-50" id="team">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Meet the Minds</h2>
                    <p className="text-lg text-slate-600">The diverse team of experts dedicated to your mental well-being.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                                    <a href="#" className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <div className="text-primary font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</div>
                                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

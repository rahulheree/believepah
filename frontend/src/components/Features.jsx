import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Gamepad2, MapPin, Heart, Shield } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <MessageSquare className="w-6 h-6 text-white" />,
            title: "Empathetic AI Chatbot",
            desc: "Advanced sentiment analysis that understands your emotions, available 24/7.",
            color: "bg-primary"
        },

        {
            icon: <Gamepad2 className="w-6 h-6 text-white" />,
            title: "Therapeutic Games",
            desc: "Engage in mental wellness through evidence-based gamified experiences.",
            color: "bg-accent"
        },
        {
            icon: <MapPin className="w-6 h-6 text-white" />,
            title: "Digital Kiosks",
            desc: "Physical access points for immediate mental health screening.",
            color: "bg-primary"
        },
        {
            icon: <Heart className="w-6 h-6 text-white" />,
            title: "Mood Tracking",
            desc: "Visual analytics to help you understand your emotional patterns.",
            color: "bg-secondary"
        },
        {
            icon: <Shield className="w-6 h-6 text-white" />,
            title: "Safety First",
            desc: "Crisis detection protocols ensuring you get help when you need it most.",
            color: "bg-accent"
        }
    ];

    return (
        <section className="py-20 bg-neutral" id="features">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Comprehensive Care Ecosystem</h2>
                    <p className="text-lg text-slate-600">We combine technology and human expertise to provide a complete mental health solution.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
                        >
                            <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

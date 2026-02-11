import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const LandingPage = () => {
    return (
        <div className="font-sans text-slate-900 bg-neutral min-h-screen selection:bg-teal-100 selection:text-teal-900">
            <Navbar />
            <main>
                <Hero />

                {/* Features/Stats Section Preview */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why BelievePath?</h2>
                            <p className="text-lg text-slate-600">We combine cutting-edge AI technology with human compassion to provide a complete mental wellness ecosystem.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "24/7 AI Support", icon: "🤖", desc: "Always available empathetic chat companion." },
                                { title: "Professional Care", icon: "👨‍⚕️", desc: "Connect with certified therapists instantly." },
                                { title: "Holistic Growth", icon: "🌱", desc: "Tools for meditation, journaling, and self-care." }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-base-200 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100 group">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;

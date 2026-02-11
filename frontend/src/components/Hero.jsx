import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-neutral to-emerald-50/50">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold tracking-wide shadow-sm">
                            ✨ Revolutionizing Mental Healthcare
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif text-slate-900">
                            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Inner Peace</span> Starts Here
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-sans font-light">
                            Experience the future of mental wellness with our empathetic AI companion and professional care network. 24/7 support, personalized therapy, and a path to a better you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-teal-800 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 group">
                                Start Your Journey
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
                                <Play className="w-5 h-5 mr-2 text-primary fill-current" />
                                Watch Demo
                            </button>
                        </div>
                        <div className="mt-12 flex flex-col items-center lg:items-start space-y-4">
                            <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by leading partners</div>
                            <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="text-xl font-serif font-bold text-slate-600">HealthLine</div>
                                <div className="text-xl font-serif font-bold text-slate-600">MindCare</div>
                                <div className="text-xl font-serif font-bold text-slate-600">Therapify</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:w-1/2 relative perspective-1000"
                    >
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>

                        <img
                            src={heroImage}
                            alt="Mental Wellness Visualization"
                            className="relative rounded-3xl shadow-2xl ring-1 ring-white/20 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out"
                        />

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/40 max-w-xs"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">😊</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-800">Mood improved</div>
                                    <div className="text-xs text-slate-500">+24% this week</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

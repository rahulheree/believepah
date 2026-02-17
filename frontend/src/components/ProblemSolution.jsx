import React from 'react';
import { AlertCircle, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
    return (
        <section className="py-20 bg-white" id="problem-solution">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The Mental Health Crisis & Our Solution</h2>
                    <p className="text-lg text-slate-600">Bridging the gap between the overwhelming need for care and the limited access to resources.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-red-50/50 rounded-3xl p-8 border border-red-100"
                    >
                        <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
                            <span className="p-2 bg-red-100 rounded-lg mr-3 text-red-600">
                                <AlertCircle className="w-6 h-6" />
                            </span>
                            The Challenge
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-2 rounded-full shadow-sm h-fit">
                                    <TrendingUp className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">1 in 4 People</h4>
                                    <p className="text-slate-600">Affected by mental health issues worldwide.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-2 rounded-full shadow-sm h-fit">
                                    <Clock className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Long Wait Times</h4>
                                    <p className="text-slate-600">Average 6-12 weeks to see a professional.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-2 rounded-full shadow-sm h-fit">
                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">$1 Trillion Lost</h4>
                                    <p className="text-slate-600">Annual global economic impact due to lost productivity.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-teal-50/50 rounded-3xl p-8 border border-teal-100"
                    >
                        <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
                            <span className="p-2 bg-teal-100 rounded-lg mr-3 text-primary">
                                <CheckCircle2 className="w-6 h-6" />
                            </span>
                            The BelievePath Solution
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-100/50">
                                <h4 className="font-bold text-primary mb-1">AI Chatbot with Empathy</h4>
                                <p className="text-sm text-slate-600">24/7 availability with human-like emotional understanding.</p>
                            </div>
                            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-100/50">
                                <h4 className="font-bold text-secondary mb-1">Digital Mental Health Kiosks</h4>
                                <p className="text-sm text-slate-600">Anonymous screening and accessible care in public spaces.</p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600">Choose the path that fits your journey.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Tier */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">Free</span>
                            </div>
                            <p className="text-slate-500 mt-2 text-sm">Forever.</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>Basic AI Chatbot Access</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>Daily Mood Tracking</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>Community Forum Access</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:border-primary hover:text-primary transition-colors">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Premium Tier */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl bg-primary text-white relative shadow-xl transform scale-105"
                    >
                        <div className="absolute top-0 right-0 bg-accent text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">Premium</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">$29.99</span>
                                <span className="text-white/70">/month</span>
                            </div>
                            <p className="text-emerald-100 mt-2 text-sm">For comprehensive care.</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-sm text-emerald-50">
                                <Check className="w-5 h-5 text-accent shrink-0" />
                                <span>Unlimited AI Chatbot with Memory</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-emerald-50">
                                <Check className="w-5 h-5 text-accent shrink-0" />
                                <span>Advanced Analytics Reports</span>
                            </li>

                            <li className="flex items-start gap-3 text-sm text-emerald-50">
                                <Check className="w-5 h-5 text-accent shrink-0" />
                                <span>Full Therapeutic Games Library</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full bg-white text-primary font-bold hover:bg-slate-50 transition-colors shadow-lg">
                            Start Free Trial
                        </button>
                    </motion.div>

                    {/* Enterprise/Annual */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Annual</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900">$299</span>
                                <span className="text-slate-500">/year</span>
                            </div>
                            <p className="text-slate-500 mt-2 text-sm">Save 20% yearly.</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>All Premium Features</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>Priority 24/7 Support</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-600">
                                <Check className="w-5 h-5 text-primary shrink-0" />
                                <span>Family Plan Options</span>
                            </li>
                        </ul>
                        <button className="w-full py-3 px-6 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:border-primary hover:text-primary transition-colors">
                            Choose Annual
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

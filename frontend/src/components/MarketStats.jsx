import React from 'react';
import { motion } from 'framer-motion';

const MarketStats = () => {
    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative" id="stats">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Now?</h2>
                        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                            The world is waking up to the importance of mental health.
                            Digital adoption has accelerated, and we are leading the charge
                            to make care accessible to everyone, everywhere.
                        </p>
                        <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-emerald-50 my-8">
                            "The true difficulty lies in bridging the gap. We are building the bridge."
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                        >
                            <div className="text-4xl font-bold text-accent mb-2">544B</div>
                            <div className="text-sm font-semibold opacity-90">Projected Market by 2031</div>
                            <div className="text-xs opacity-70 mt-2">Global shift towards wellness</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                        >
                            <div className="text-4xl font-bold text-accent mb-2">30%</div>
                            <div className="text-sm font-semibold opacity-90">Care Coverage</div>
                            <div className="text-xs opacity-70 mt-2">Only 30% receive adequate care</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                        >
                            <div className="text-4xl font-bold text-accent mb-2">91%</div>
                            <div className="text-sm font-semibold opacity-90">User Satisfaction</div>
                            <div className="text-xs opacity-70 mt-2">With digital therapy tools</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                        >
                            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                            <div className="text-sm font-semibold opacity-90">Availability</div>
                            <div className="text-xs opacity-70 mt-2">Instant access to support</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketStats;

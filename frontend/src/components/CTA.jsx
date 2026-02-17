import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-teal-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your Path?</h2>
                <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
                    Join thousands of others who have already taken the first step towards better mental wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
                        Get Started Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all min-w-[200px]">
                        Contact Sales
                    </button>
                </div>

                <p className="mt-8 text-sm opacity-60">No credit card required for basic plan.</p>
            </div>
        </section>
    );
};

export default CTA;

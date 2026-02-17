import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                            <span className="text-2xl font-bold text-white font-serif">BelievePath</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Transforming mental healthcare through innovation, empathy, and accessibility.
                            Your journey to inner peace starts here.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">AI Chatbot</a></li>

                            <li><a href="#" className="hover:text-primary transition-colors">Digital Kiosks</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">For Providers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} BelievePath. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

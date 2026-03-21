import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, Mail, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateSection } from '../components/AnimateSection';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', country: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formState);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: '', email: '', phone: '', country: '', message: '' });
    };

    return (
        <div className="pt-24 bg-black text-white min-h-screen">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 xl:gap-32">
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: false, margin: '-60px' }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-green-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Get in Touch</span>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold font-serif mb-8">Connect with Our Advisors</h1>
                            <p className="text-lg sm:text-xl xl:text-xl text-neutral-400 mb-12 leading-relaxed">
                                Whether you are looking to start a portfolio or have a question about our algorithms, our team is ready to assist.
                            </p>

                            <div className="space-y-10">
                                {[
                                    {
                                        icon: <MapPin className="w-5 h-5 text-white" />,
                                        title: 'India HQ',
                                        content: <>UL-15 Arjun Tower,<br />Shivranjani Cross Roads, Satellite,<br />Ahmedabad - 380015</>
                                    },
                                    {
                                        icon: <Phone className="w-5 h-5 text-white" />,
                                        title: 'Canada Office',
                                        content: '+1 (437) 559-7909'
                                    },
                                    {
                                        icon: <Mail className="w-5 h-5 text-white" />,
                                        title: 'Contact Details',
                                        content: <><span className="block">squareofftrades@gmail.com</span><span>+91 98253 67896</span></>
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        className="flex items-start space-x-6"
                                        initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: false, margin: '-20px' }}
                                        transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                            <p className="text-neutral-400 leading-relaxed">{item.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>



                            {/* Quick Actions */}
                            <div className="mt-12 flex flex-wrap gap-4">
                                <a href="mailto:squareofftrades@gmail.com">
                                    <Button variant="outline" size="sm">Email Us</Button>
                                </a>
                                <a href="tel:+919825367896">
                                    <Button variant="outline" size="sm">Call India</Button>
                                </a>
                                <a href="tel:+14375597909">
                                    <Button variant="outline" size="sm">Call Canada</Button>
                                </a>
                                {/* WhatsApp */}
                                <a href="https://wa.me/919825367896" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="sm">WhatsApp</Button>
                                </a>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            className="bg-neutral-950 border border-white/10 p-6 sm:p-8 md:p-10 xl:p-14 relative overflow-hidden"
                            initial={{ opacity: 0, x: 50, scale: 0.95, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: false, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-center py-24"
                                    >
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-500 mb-6 border border-green-500/20">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold mb-4">Message Sent</h3>
                                        <p className="text-neutral-400 mb-8 max-w-xs mx-auto">Thank you for reaching out. Our team will review your inquiry and get back to you shortly.</p>
                                        <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                                        <p className="text-neutral-500 text-sm mb-8">Fill in the form below and we will contact you shortly.</p>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-white focus:outline-none transition-colors placeholder-neutral-700"
                                                    placeholder="Enter your full name"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-white focus:outline-none transition-colors placeholder-neutral-700"
                                                        placeholder="name@example.com"
                                                        value={formState.email}
                                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-white focus:outline-none transition-colors placeholder-neutral-700"
                                                        placeholder="+91 ..."
                                                        value={formState.phone}
                                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Country of Residence</label>
                                                <input
                                                    type="text"
                                                    id="country"
                                                    className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-white focus:outline-none transition-colors placeholder-neutral-700"
                                                    placeholder="e.g. India, Canada"
                                                    value={formState.country}
                                                    onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Message</label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-white focus:outline-none transition-colors placeholder-neutral-700 resize-none"
                                                    placeholder="How can we help you?"
                                                    value={formState.message}
                                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            <Button type="submit" variant="primary" fullWidth size="lg" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
            </div>
        </div>
    );
};
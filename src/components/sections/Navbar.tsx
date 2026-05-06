import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '@/config';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Facebook, Twitter, Youtube, Share2 } from 'lucide-react';
import { MiradorButton } from '@/components/ui/MiradorButton';

const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
    const icons: Record<string, React.ReactNode> = {
        Instagram: <Instagram size={16} />,
        LinkedIn: <Linkedin size={16} />,
        Facebook: <Facebook size={16} />,
        Twitter: <Twitter size={16} />,
        Youtube: <Youtube size={16} />,
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-primary transition-colors p-1"
            aria-label={platform}
        >
            {icons[platform] || <Share2 size={16} />}
        </a>
    );
};

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const { branding, navigation, dynamicContent } = config;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="w-full z-50 relative">
            {/* Top Bar */}
            <div className="hidden lg:block bg-[#FCF8F1] border-b border-zinc-100 py-2.5">
                <div className="container mx-auto px-6 flex justify-between items-center text-[13px] font-medium text-zinc-600">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-400 font-normal">Email:</span>
                            <a href={`mailto:${branding.email}`} className="hover:text-primary transition-colors">
                                {branding.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-400 font-normal">Call us:</span>
                            <a href={`tel:${branding.phone}`} className="hover:text-primary transition-colors font-bold">
                                {branding.phone}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {dynamicContent.contact_page.info.socials.map((social) => (
                            <SocialIcon key={social.platform} platform={social.platform} url={social.url} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Navbar - Now Sticky */}
            <div 
                className={`sticky top-0 w-full z-50 transition-all duration-500 ${
                    scrolled ? 'bg-white/95 backdrop-blur-md py-2.5 md:py-3 shadow-lg' : 'bg-white py-4 md:py-5'
                }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >
                             <img 
                                src="/ej-construccion/mirador-logo-website.png" 
                                alt={branding.name} 
                                className="h-9 md:h-12 w-auto max-w-[180px] xs:max-w-none object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-10">
                            {navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className={`text-[13px] font-bold transition-all hover:text-primary uppercase tracking-wider ${
                                            location.pathname === link.href ? 'text-primary' : 'text-zinc-800'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden lg:block">
                            <MiradorButton 
                                href={branding.cta_link}
                                variant="dark"
                            >
                                {branding.cta_text}
                            </MiradorButton>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                        >
                            <span className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl flex flex-col p-6 sm:p-8 lg:hidden pt-24"
                    >
                        <div className="flex flex-col gap-6">
                            {navigation.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-2xl font-stardom font-bold text-zinc-900 hover:text-primary transition-colors block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navigation.length * 0.05 }}
                            >
                                <MiradorButton 
                                    href={branding.cta_link}
                                    variant="dark"
                                    className="w-full justify-between"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {branding.cta_text}
                                </MiradorButton>
                            </motion.div>
                        </div>

                        <div className="mt-auto pt-12 border-t border-zinc-100">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-4 text-zinc-600">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail size={18} className="text-primary" />
                                    </div>
                                    <span className="text-sm font-medium">{branding.email}</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-600">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Phone size={18} className="text-primary" />
                                    </div>
                                    <span className="text-sm font-bold">{branding.phone}</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                {dynamicContent.contact_page.info.socials.map((social) => (
                                    <SocialIcon key={social.platform} platform={social.platform} url={social.url} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

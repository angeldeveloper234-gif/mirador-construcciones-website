import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { MiradorButton } from '@/components/ui/MiradorButton';

export const NewsletterCTA = () => {
    return (
        <section className="relative py-32 bg-white overflow-hidden border-t border-industrial-100">
            {/* Grid Background - Light Architectural Pattern */}
            <div className="absolute inset-0 arch-grid-light pointer-events-none opacity-70" />

            {/* Decorative Elements - Floating Construction Equipment */}
            <motion.div 
                initial={{ y: -150, opacity: 0, rotate: -5 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="absolute top-[-20px] left-4 md:left-20 w-32 md:w-56 z-0 pointer-events-none drop-shadow-2xl"
            >
                <img 
                    src="/ej-construccion/gancho-imagen-cta.png" 
                    alt="Gancho de Grúa" 
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
                />
            </motion.div>

            <motion.div 
                initial={{ x: 200, opacity: 0, rotate: 10 }}
                whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-[-40px] right-[-60px] md:right-[-20px] w-64 md:w-[480px] z-0 pointer-events-none"
            >
                <img 
                    src="/ej-construccion/cta-image-rem1.png" 
                    alt="Excavadora" 
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" 
                />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Subtitle with lines */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-primary/20" />
                        <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase font-bold">
                            Newsletter Oficial
                        </span>
                        <div className="h-[1px] w-12 bg-primary/20" />
                    </div>

                    <h2 className="text-huge-clamped font-display text-industrial-900 leading-[1] tracking-tighter mb-10">
                        Únete para <span className="text-primary italic font-bold">Ofertas Exclusivas</span> <br className="hidden md:block" /> y Análisis de Construcción.
                    </h2>

                    <p className="text-industrial-500 font-sans text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
                        Recibe las últimas tendencias en ingeniería, diseño arquitectónico y promociones especiales directamente en tu bandeja de entrada.
                    </p>

                    {/* Subscription Form */}
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 bg-industrial-50/50 p-2.5 rounded-3xl md:rounded-full border border-industrial-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-sm max-w-3xl mx-auto"
                    >
                        <div className="relative flex-1 w-full flex items-center px-6">
                            <Mail className="w-5 h-5 text-primary mr-4 opacity-70" />
                            <input 
                                type="email" 
                                placeholder="Tu correo electrónico empresarial..." 
                                className="w-full bg-transparent py-4 outline-none text-industrial-900 font-sans text-lg placeholder:text-industrial-400"
                                required
                            />
                        </div>
                        
                        <MiradorButton 
                            type="submit"
                            variant="primary"
                            className="w-full md:w-auto !py-5 !px-12 !text-[13px]"
                            icon={<Send size={14} />}
                            iconPosition="right"
                        >
                            Suscribirme Ahora
                        </MiradorButton>
                    </form>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 opacity-60">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-industrial-400 font-sans text-[10px] uppercase tracking-widest font-bold">Sin Spam</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-industrial-400 font-sans text-[10px] uppercase tracking-widest font-bold">Contenido VIP</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-industrial-900" />
                            <span className="text-industrial-400 font-sans text-[10px] uppercase tracking-widest font-bold">Baja en 1-click</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
};

import React from 'react';
import { motion } from 'motion/react';

export const VisionConsultation = () => {
    return (
        <section id="consultation" className="py-24 px-6 bg-[#0F0F0F] relative flex items-center justify-center min-h-[40vh]">
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-stardom mb-8 tracking-tight">Cruce el Umbral.</h2>
                    <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-12 max-w-lg mx-auto leading-loose">
                        Una llamada de 15 minutos para descifrar el ADN de su proyecto. Sin compromisos, solo visión.
                    </p>
                    
                    <a 
                        href="https://calendly.com/vision-consultation" // Placeholder link
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-6 bg-transparent border border-primary text-primary text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-primary hover:text-black transition-all duration-700 hover:scale-105"
                    >
                        Programar Consulta de Visión
                    </a>

                    <div className="mt-16 flex justify-center gap-12 text-white/20 uppercase tracking-[0.3em] text-[8px] font-sans">
                        <span className="flex items-center gap-2">
                             WhatsApp Prioritario
                        </span>
                        <span className="flex items-center gap-2">
                             Consultoría Técnica
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

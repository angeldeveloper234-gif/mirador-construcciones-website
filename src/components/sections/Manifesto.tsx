import React from 'react';
import { motion } from 'motion/react';
import { config } from '@/config';

export const Manifesto = () => {
    const { dynamicContent } = config;

    return (
        <section id="manifesto" className="py-60 bg-white relative overflow-hidden">
            {/* Soft Architectural Pattern - Light */}
            <div className="absolute inset-0 arch-grid pointer-events-none opacity-40 translate-x-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-24 items-start">
                    {/* Left: Section Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="sticky top-40 flex flex-col items-center lg:items-start gap-12"
                    >
                         <div className="flex items-center gap-6 group">
                            <div className="w-12 h-px bg-industrial-200 group-hover:bg-primary transition-all duration-700" />
                            <span className="text-[10px] font-sans text-industrial-400 font-bold tracking-[0.4em] group-hover:text-industrial-900 transition-colors">Nuestro Manifiesto</span>
                        </div>
                        {/* Dramatic Floating Year Image - High Contrast */}
                        <div className="w-40 aspect-[4/5] bg-industrial-100 p-8 shadow-2xl relative overflow-hidden group border border-industrial-200">
                           <img src="/images/sketch-detail.png" className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Sketch" />
                            <span className="absolute bottom-4 left-4 text-[10px] font-sans text-industrial-900 font-black tracking-[0.2em]">Since 1998</span>
                        </div>
                    </motion.div>

                    {/* Right: The Body Copy */}
                    <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-industrial-900 leading-tight mb-20 tracking-tight font-display"
                        >
                            <span className="text-title-clamped block capitalize">
                                No solo <span className="italic font-bold">Construimos.</span> <br/>
                                <span className="text-industrial-300">Materializamos </span> <span className="italic text-primary font-bold">Legados.</span>
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-2xl md:text-4xl text-industrial-800 font-sans font-light leading-relaxed italic"
                        >
                            "{config.branding.description}"
                        </motion.p>

                        <div className="mt-24 grid sm:grid-cols-2 gap-12 text-left">
                            <div className="space-y-4 border-l-2 border-primary pl-8">
                                <span className="text-xs font-sans text-industrial-500 tracking-tight block font-bold">Solidez Técnica</span>
                                <p className="text-industrial-600 font-sans font-light leading-relaxed italic">Cada estructura es el resultado de un cálculo milimétrico y una ejecución impecable para garantizar la eternidad de la obra.</p>
                            </div>
                            <div className="space-y-4 border-l-2 border-primary pl-8">
                                <span className="text-xs font-sans text-industrial-500 tracking-tight block font-bold">Eficiencia Operativa</span>
                                <p className="text-industrial-600 font-sans font-light leading-relaxed italic">Optimizamos recursos y tiempos mediante gestión BIM avanzada, eliminando la fricción entre el plano y la realidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

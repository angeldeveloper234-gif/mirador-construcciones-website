import React from 'react';
import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export const ImmersiveExperience = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-[#0B0B0B] relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4 self-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-stardom leading-[1.1] mb-8">La Experiencia Inmersiva.</h2>
                        <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-8 leading-loose">
                            Del boceto a la realidad, eliminamos la incertidumbre. Visualice su proyecto antes de poner la primera piedra.
                        </p>
                        <div className="space-y-6 pt-12 border-t border-white/5">
                            <div className="flex gap-6 items-start">
                                <span className="text-primary font-stardom text-lg">01.</span>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Escaneo del Entorno</h4>
                                    <p className="text-[10px] text-white/30 uppercase leading-relaxed tracking-wider">Capturamos el ADN del sitio en alta resolución.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="text-primary font-stardom text-lg">02.</span>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Proyección 3D</h4>
                                    <p className="text-[10px] text-white/30 uppercase leading-relaxed tracking-wider">Modelado hiper-realista para toma de decisiones rápida.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                    >
                        <div className="mb-6 flex justify-between items-end border-b border-white/10 pb-4">
                            <span className="text-[8px] font-sans tracking-[0.4em] text-white/20 uppercase">Render vs Reality Engine _v2.0</span>
                            <span className="text-[8px] font-sans tracking-[0.4em] text-primary uppercase">Interacción Requerida</span>
                        </div>
                        <BeforeAfterSlider 
                            beforeImage="https://images.unsplash.com/photo-1542665093852-745c79ba85fa?q=80&w=1200&auto=format&fit=crop"
                            afterImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
                            beforeLabel="Estado Actual"
                            afterLabel="Resultado JCH+"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import { config } from '@/config';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
    const testimonials = config.dynamicContent.section_details.Testimonials;
    
    // Duplicamos los testimonios para un efecto infinito fluido
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section id="testimonios" className="py-24 md:py-40 bg-white overflow-hidden relative border-t border-zinc-100">
            {/* Elementos de fondo decorativos */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 mb-20 relative z-10 text-center md:text-left">
                <div className="max-w-4xl mx-auto md:mx-0">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-[0.3em] uppercase mb-8"
                    >
                        <span className="w-12 h-[1px] bg-primary"></span>
                        Opiniones de Clientes
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-display font-bold text-zinc-900 leading-[1.05] tracking-tight mb-10"
                    >
                        Construyendo <span className="text-primary italic">Reputación</span>, un Proyecto a la Vez.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 text-lg md:text-2xl font-light leading-relaxed max-w-2xl"
                    >
                        La confianza de nuestros clientes es el cimiento más sólido que hemos construido en todo México. 
                    </motion.p>
                </div>
            </div>

            {/* Carrusel Infinito (Ticker) */}
            <div className="relative flex overflow-x-hidden group py-12">
                <motion.div 
                    animate={{
                        x: [0, -1 * (482 * testimonials.length)], // Aprox width including gaps
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 whitespace-nowrap px-4"
                >
                    {duplicatedTestimonials.map((t: any, i: number) => (
                        <div 
                            key={i}
                            className="flex-shrink-0 w-[320px] md:w-[450px] p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 shadow-sm group/card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="flex gap-1.5">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} size={18} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-100 text-[10px] font-mono text-zinc-500 tracking-wider shadow-sm">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800">
                                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.136 2.536-6.448 2.536-5.464 0-9.8-4.424-9.8-9.8s4.336-9.8 9.8-9.8c2.936 0 5.168 1.152 6.704 2.616l2.312-2.312c-1.984-1.904-4.576-3.32-9.016-3.32-7.488 0-13.68 6.088-13.68 13.68s6.192 13.68 13.68 13.68c4.04 0 7.104-1.336 9.488-3.832 2.456-2.456 3.232-5.904 3.232-8.68 0-.824-.072-1.608-.208-2.312H12.48z" />
                                        </svg>
                                        GOOGLE REVIEW
                                    </div>
                                </div>
                                
                                <Quote size={40} className="text-primary/10 mb-8 group-hover/card:text-primary/20 transition-colors duration-700" />
                                
                                <p className="text-zinc-800 text-xl md:text-2xl font-light leading-[1.6] mb-12 whitespace-normal italic">
                                    "{t.text}"
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-5 pt-8 border-t border-zinc-100 mt-auto">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                                    {t.name.split(' ').map((n: string) => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="text-zinc-900 font-medium text-lg tracking-tight">{t.name}</h4>
                                    <p className="text-zinc-500 text-xs uppercase tracking-[0.15em] font-mono mt-1">{t.project}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                
                {/* Gradientes laterales para suavizar el borde */}
                <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 mt-16 md:mt-32 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-12 border-y border-zinc-100">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-4xl md:text-5xl font-display font-bold text-zinc-900">4.9/5.0</span>
                        <div className="flex gap-1 text-primary">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                        </div>
                        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-2">Rating Global en Google</p>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-20 bg-zinc-200" />

                    <div className="max-w-md text-center md:text-right">
                        <p className="text-zinc-600 text-sm md:text-base font-light italic mb-4">
                            "Cada entrega es un compromiso renovado con la excelencia técnica y la satisfacción de quienes confían en nosotros."
                        </p>
                        <p className="text-primary font-mono text-[10px] uppercase tracking-[0.2em]">— Mirador Construcciones</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

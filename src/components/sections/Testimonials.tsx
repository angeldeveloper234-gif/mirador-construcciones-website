'use client';

import { config } from '@/config';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Testimonials() {
    const testimonials = config.dynamicContent.section_details.Testimonials;
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section id="testimonios" className="py-24 md:py-40 bg-white overflow-hidden relative border-t border-zinc-100 w-full">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 mb-16 md:mb-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-primary font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 md:mb-8"
                        >
                            <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
                            Opiniones de Clientes
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-7xl font-display font-bold text-zinc-900 leading-[1.1] tracking-tight"
                        >
                            Construyendo <span className="text-primary italic">Reputación</span>,<br className="hidden md:block" /> un Proyecto a la Vez.
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons - Hidden on small mobile */}
                    <div className="hidden sm:flex gap-3">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300 disabled:opacity-30"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Section */}
            <div className="relative w-full overflow-hidden px-4 md:px-0">
                <AnimatePresence mode="wait">
                    {isLoaded ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                        >
                            <Swiper
                                modules={[Navigation, Autoplay, Pagination]}
                                spaceBetween={16}
                                slidesPerView={1.1}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    // @ts-expect-error Swiper types
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    // @ts-expect-error Swiper types
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 24,
                                        centeredSlides: true,
                                    },
                                    768: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 32,
                                        centeredSlides: false,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 40,
                                        centeredSlides: false,
                                    },
                                    1280: {
                                        slidesPerView: 2.8,
                                        spaceBetween: 48,
                                        centeredSlides: false,
                                    }
                                }}
                                className="!overflow-visible pb-16"
                            >
                                {testimonials.map((t: any, i: number) => (
                                    <SwiperSlide key={i} className="h-auto">
                                        <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] h-full flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-700 min-h-[360px] sm:min-h-[400px] relative group overflow-hidden">
                                            <Quote size={80} className="absolute -top-4 -right-4 text-primary/5 rotate-12 group-hover:text-primary/10 transition-all duration-700 md:size-[160px]" />
                                            
                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-8 md:mb-12">
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, idx) => (
                                                            <Star key={idx} size={16} className="fill-primary text-primary" />
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-zinc-100 text-[10px] font-mono text-zinc-500 tracking-wider shadow-sm">
                                                        <img src="/icons/google.svg" alt="Google" className="w-8 h-8" />
                                                        <span className="font-bold">GOOGLE</span>
                                                    </div>
                                                </div>
                                                
                                                <p className="text-zinc-800 text-lg md:text-2xl font-light leading-[1.6] mb-10 italic">
                                                    &quot;{t.text}&quot;
                                                </p>
                                            </div>
                                            
                                            <div className="flex items-center gap-4 pt-6 border-t border-zinc-100 mt-auto relative z-10">
                                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-display font-bold text-base md:text-lg">
                                                    {t.name.split(' ').map((n: string) => n[0]).join('')}
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-zinc-900 font-semibold text-base md:text-lg tracking-tight truncate">{t.name}</h4>
                                                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono truncate">{t.project}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    ) : (
                        <div className="h-[400px] w-full bg-zinc-50 animate-pulse rounded-[3rem]" />
                    )}
                </AnimatePresence>
            </div>

            <div className="container mx-auto px-6 mt-8 md:mt-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10 border-y border-zinc-100">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-3xl md:text-5xl font-display font-bold text-zinc-900">4.9/5.0</span>
                        <div className="flex gap-1 text-primary">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                        </div>
                        <p className="text-zinc-400 text-[9px] font-mono uppercase tracking-[0.2em] mt-2">Rating Global en Google</p>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-16 bg-zinc-200" />

                    <div className="max-w-md text-center md:text-right">
                        <p className="text-zinc-500 text-sm font-light italic mb-3">
                            &quot;Cada entrega es un compromiso renovado con la excelencia técnica y la satisfacción de quienes confían en nosotros.&quot;
                        </p>
                        <p className="text-primary font-mono text-[9px] uppercase tracking-[0.2em]">— Mirador Construcciones</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

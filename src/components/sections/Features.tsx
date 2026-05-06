import React from 'react';
import { motion } from 'motion/react';
import { config } from '@/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Home, Building, Wrench, Factory, ChevronLeft, ChevronRight } from 'lucide-react';
import { MiradorButton } from '@/components/ui/MiradorButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const iconMap: Record<string, any> = {
    home: Home,
    building: Building,
    wrench: Wrench,
    factory: Factory,
};

export const Features = () => {
    const expertise = config.dynamicContent.section_details.Features;

    return (
        <section id="services" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="text-industrial-600 font-sans font-medium uppercase tracking-[0.3em] text-xs">
                                Nuestros Servicios
                            </span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display text-industrial-900 font-bold max-w-3xl leading-[1.1] tracking-tight"
                        >
                            <span className="block">Servicios que se adaptan</span>
                            <span className="block md:inline">
                                a <span className="text-primary">Tus Necesidades</span>
                            </span>
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-industrial-200 flex items-center justify-center text-industrial-900 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-industrial-200 flex items-center justify-center text-industrial-900 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={32}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                            el: '.swiper-pagination-custom'
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="services-swiper pb-20 !overflow-visible"
                    >
                        {expertise.map((service: any, i: number) => {
                            const Icon = iconMap[service.icon] || Home;
                            return (
                                <SwiperSlide key={i} className="h-auto">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="bg-white rounded-[24px] overflow-visible shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group h-full border border-industrial-100 flex flex-col relative"
                                    >
                                        {/* Image Container */}
                                        <div className="relative m-4 mb-0 h-60 overflow-hidden rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[60px]">
                                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/40 to-transparent z-10" />
                                            <img 
                                                src={service.image} 
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Icon Overlap - Moved outside overflow-hidden container */}
                                        <div className="absolute top-[230px] left-10 z-20">
                                            <div className="w-14 h-14 bg-industrial-900 rounded-full flex items-center justify-center text-white shadow-xl border-[4px] border-white transition-transform duration-500 group-hover:scale-110">
                                                <Icon size={22} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-14 p-8 flex flex-col flex-grow">
                                            <h3 className="text-xl font-display text-industrial-900 font-bold mb-3 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-industrial-400 font-sans text-[14px] leading-relaxed mb-8 flex-grow">
                                                {service.solution}
                                            </p>
                                            
                                            <div className="pt-6 border-t border-industrial-50">
                                                <a 
                                                    href="#contact" 
                                                    className="inline-flex items-center gap-2 text-primary font-bold text-[12px] uppercase tracking-widest hover:gap-4 transition-all"
                                                >
                                                    Leer más
                                                    <ArrowRight size={14} strokeWidth={3} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    
                    {/* Custom Pagination Position */}
                    <div className="swiper-pagination-custom flex justify-center mt-8"></div>
                </div>

                {/* Footer Button */}
                <div className="flex justify-center mt-12">
                    <MiradorButton 
                        href="/services" 
                        variant="primary" 
                        iconPosition="right"
                        className="px-10 py-4"
                    >
                        Ver Todos los Servicios
                    </MiradorButton>
                </div>
            </div>

            {/* Custom Pagination Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .swiper-pagination-custom {
                    position: relative !important;
                    bottom: 0 !important;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    z-index: 10;
                }
                .swiper-pagination-custom .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #CBD5E1 !important;
                    opacity: 1 !important;
                    margin: 0 !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .swiper-pagination-custom .swiper-pagination-bullet-active {
                    background: #FF4A25 !important;
                    width: 30px !important;
                    border-radius: 5px !important;
                }
            `}} />

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-industrial-900/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
        </section>
    );
};

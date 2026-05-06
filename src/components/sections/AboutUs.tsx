import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MiradorButton } from "@/components/ui/MiradorButton";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ABOUT_SLIDES = [
    {
        id: "mision",
        title: "Nuestra Misión",
        content: "Nos especializamos en el desarrollo integral de obras civiles, comerciales e industriales, asegurando los más altos estándares constructivos desde la fase de planificación hasta la entrega llave en mano. Nuestro equipo multidisciplinario transforma visiones en realidades tangibles."
    },
    {
        id: "vision",
        title: "Nuestra Visión",
        content: "Ser la empresa constructora líder en innovación y sustentabilidad, reconocida por la calidad técnica y el compromiso humano en cada m² edificado, impulsando el desarrollo de infraestructuras que perduren por generaciones."
    },
    {
        id: "historia",
        title: "Nuestra Historia",
        content: "Con más de 25 años de trayectoria, nacimos como un estudio boutique de ingeniería y evolucionamos hasta convertirnos en una constructora de referencia regional, habiendo completado con éxito más de 150 proyectos de gran escala."
    }
];

export function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + ABOUT_SLIDES.length) % ABOUT_SLIDES.length);
    };

    const slide = ABOUT_SLIDES[currentSlide];

    return (
        <section className="relative py-16 md:py-20 bg-white overflow-hidden">

            {/* Background Ruler Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, transparent 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />
            {/* Ruler marks at the bottom like in the image */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-8 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)',
                    backgroundSize: '20px 100%'
                }}
            />

            {/* Crane Hook Decorative Image */}
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute top-0 right-10 md:right-32 w-32 md:w-48 z-10 hidden sm:block"
            >
                <img 
                    src="https://images.unsplash.com/photo-1541888086225-f640ee9153c3?q=80&w=600&auto=format&fit=crop" 
                    alt="Grúa" 
                    className="w-full h-auto object-cover object-bottom"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', mixBlendMode: 'multiply' }}
                />
            </motion.div>

            <div className="container mx-auto px-6 relative z-20">
                {/* TOP ROW: Title & Text */}
                <div className="mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[2px] bg-primary"></div>
                        <span className="text-industrial-900 font-sans font-bold text-sm tracking-widest uppercase">Sobre Nosotros</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-industrial-900 leading-[1.1] tracking-[-0.02em] capitalize"
                            >
                                Construyendo Excelencia <br />
                                <span className="text-industrial-700">en Cada Proyecto</span>
                            </motion.h2>
                        </div>
                        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-8 sm:items-center justify-between lg:justify-end">
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-industrial-600 font-sans text-base md:text-lg max-w-sm leading-relaxed"
                            >
                                En Mirador Construcciones, combinamos ingeniería de precisión con gestión estratégica para entregar obras que trascienden.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="shrink-0"
                            >
                                <MiradorButton variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                    Saber Más
                                </MiradorButton>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM ROW: Image and Dark Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Image with Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[480px]"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" 
                            alt="Ingenieros en obra" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-industrial-900/10"></div>
                        
                        {/* 25+ Years Badge */}
                        <div className="absolute bottom-6 right-6 bg-primary text-white p-6 md:p-8 rounded-2xl shadow-xl flex items-center gap-4">
                            <span className="text-4xl md:text-5xl font-display font-bold leading-none">25+</span>
                            <div className="flex flex-col justify-center">
                                <span className="font-sans font-bold text-sm md:text-base leading-tight">Años de</span>
                                <span className="font-sans text-xs md:text-sm text-white/80 leading-tight uppercase tracking-wider">Experiencia</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Dark Card Slider */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-industrial-900 rounded-3xl p-10 md:p-16 flex flex-col justify-between h-full relative overflow-hidden group shadow-2xl shadow-industrial-900/20"
                    >
                        {/* Subtle blueprint pattern inside the card */}
                        <div 
                            className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                                backgroundSize: '32px 32px'
                            }}
                        />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex-grow overflow-hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.p 
                                        key={ABOUT_SLIDES[currentSlide].id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="text-industrial-200 font-sans text-lg md:text-xl leading-[1.7] mb-12"
                                    >
                                        {slide.content}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
                                <AnimatePresence mode="wait">
                                    <motion.span 
                                        key={ABOUT_SLIDES[currentSlide].id + "-title"}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-primary font-display font-bold text-2xl tracking-tight"
                                    >
                                        {slide.title}
                                    </motion.span>
                                </AnimatePresence>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={prevSlide}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all active:scale-95"
                                        aria-label="Anterior"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={nextSlide}
                                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 hover:bg-industrial-50 hover:text-primary transition-all active:scale-95"
                                        aria-label="Siguiente"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

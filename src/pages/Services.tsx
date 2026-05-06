import { motion } from "motion/react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { Check, ArrowRight, Quote, Shield, Zap, Target, PenTool, ClipboardCheck } from "lucide-react";
import { MiradorButton } from "@/components/ui/MiradorButton";

const iconMap: Record<string, any> = {
    "01": Target,
    "02": PenTool,
    "03": ClipboardCheck,
    "04": Zap,
    "05": Shield,
};

export function Services() {
    const { branding, dynamicContent } = config;
    const { services_page, section_details } = dynamicContent;

    return (
        <main className="min-h-screen bg-white selection:bg-primary selection:text-white pt-20 overflow-x-hidden">
            <SEO 
                title="Servicios — Mirador Construcciones" 
                description={services_page.hero.subtitle}
            />

            {/* Grid Background Texture */}
            <div className="fixed inset-0 arch-grid-light pointer-events-none opacity-50 z-0" />

            {/* SECTION 01: HERO (Framed Style like Home) */}
            <section className="relative px-4 pb-12 pt-8 z-10">
                <div className="relative min-h-[500px] md:min-h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-industrial-900 group shadow-2xl">
                    {/* Background Visual */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/services-img/obra-civil.webp" 
                            alt="Ingeniería y Obra" 
                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                <span className="text-white/80 font-sans font-bold uppercase tracking-[0.3em] text-[10px]">
                                    Soluciones de Ingeniería
                                </span>
                            </div>
                            
                            <h1 className="text-5xl md:text-[clamp(2.5rem,8vw,72px)] font-display text-white uppercase tracking-tighter leading-[1] mb-8">
                                {services_page.hero.title.split(' ')[0]} <br />
                                <span className="text-primary italic font-bold">{services_page.hero.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-white/70 font-sans font-medium max-w-2xl leading-relaxed mb-12">
                                {services_page.hero.subtitle}
                            </p>

                            <MiradorButton href="/contact" variant="primary" className="px-10 py-4">
                                SOLICITAR COTIZACIÓN
                            </MiradorButton>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 02: PACKAGES (Home Card Style) */}
            <section className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                <span className="text-industrial-600 font-sans font-medium uppercase tracking-[0.3em] text-xs">
                                    Nuestras Modalidades
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display text-industrial-900 font-bold max-w-2xl leading-[1.1] tracking-tight">
                                Estructuras de <span className="text-primary">Inversión y Obra</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {services_page.packages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group bg-white rounded-[32px] border border-industrial-100 p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                                    <div className="flex-1">
                                        <div className="w-12 h-12 bg-industrial-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-primary transition-colors">
                                            <span className="font-display font-bold text-xl">0{idx + 1}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-display text-industrial-900 font-bold mb-4 tracking-tight leading-tight uppercase">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-industrial-500 font-sans text-lg leading-relaxed">{pkg.description}</p>
                                    </div>
                                    <div className="bg-industrial-50 p-6 rounded-2xl border border-industrial-100 min-w-[180px] text-center md:text-right">
                                        <span className="text-[10px] font-sans text-industrial-400 block mb-2 uppercase tracking-widest font-bold">INVERSIÓN ESTIMADA</span>
                                        <div className="text-3xl font-display text-industrial-900 font-bold">
                                            ${pkg.price_from} <span className="text-xs text-industrial-400 font-sans tracking-normal uppercase">MXN</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-12">
                                        {pkg.benefits.map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-4 text-industrial-600">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={4} />
                                                </div>
                                                <span className="text-[15px] font-sans font-medium tracking-tight">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <MiradorButton 
                                    href="/contact" 
                                    variant={idx === 0 ? "primary" : "outline"} 
                                    className="w-full justify-center py-5 text-sm"
                                >
                                    {pkg.cta}
                                </MiradorButton>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 03: TESTIMONIAL (Light Home Style) */}
            <section className="py-24 bg-industrial-900 relative overflow-hidden mx-4 md:mx-8 rounded-[48px]">
                <div className="absolute inset-0 arch-grid pointer-events-none opacity-10" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="mb-12 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
                        <Quote className="w-10 h-10 text-primary" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-2xl md:text-4xl font-display text-white italic font-medium leading-[1.2] mb-12">
                            "{section_details.Testimonials[0].text}"
                        </p>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-primary font-sans text-sm uppercase tracking-[0.4em] font-bold">
                                {section_details.Testimonials[0].name}
                            </span>
                            <span className="text-white/40 font-sans text-xs uppercase tracking-widest">
                                {section_details.Testimonials[0].project}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 04: STEP BY STEP PROCESS (Clean Grid) */}
            <section className="py-32 md:py-48 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="mb-24 text-center max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="text-industrial-600 font-sans font-medium uppercase tracking-[0.3em] text-xs">
                                Metodología de Ejecución
                            </span>
                            <span className="w-8 h-[2px] bg-primary"></span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display text-industrial-900 font-bold uppercase tracking-tight leading-[1]">
                            El camino <span className="text-primary italic">Maestro</span> hacia tu obra
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
                        {services_page.process.map((step, idx) => {
                            const Icon = iconMap[step.step] || Target;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-industrial-50/50 hover:bg-white rounded-[24px] p-8 border border-industrial-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={24} />
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-primary font-display font-bold text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-display text-industrial-900 font-bold uppercase mb-4 tracking-tight">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-industrial-500 font-sans leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 05: FINAL CTA (Matches Home's Newsletter/CTA Style) */}
            <section className="relative py-32 bg-white overflow-hidden border-t border-industrial-100">
                <div className="absolute inset-0 arch-grid-light pointer-events-none opacity-70" />
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-primary/20" />
                            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase font-bold">
                                Hablemos de tu proyecto
                            </span>
                            <div className="h-[1px] w-12 bg-primary/20" />
                        </div>

                        <h2 className="text-huge-clamped font-display text-industrial-900 leading-[1] tracking-tighter mb-10 uppercase">
                            ¿Listo para <span className="text-primary italic font-bold">materializar</span> <br className="hidden md:block" /> tu visión arquitectónica?
                        </h2>

                        <p className="text-industrial-500 font-sans text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
                            Agenda una Sesión de Visión gratuita y descubre cómo nuestra ingeniería de precisión puede optimizar cada fase de tu obra.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <MiradorButton 
                                href="/contact"
                                variant="primary"
                                className="!py-6 !px-12 !text-[14px]"
                                icon={<ArrowRight size={18} />}
                                iconPosition="right"
                            >
                                INICIAR CONSULTA GRATIS
                            </MiradorButton>
                            <a href={`tel:${branding.phone.replace(/\s/g, '')}`} className="text-industrial-900 font-sans font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
                                LLAMAR AHORA
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}


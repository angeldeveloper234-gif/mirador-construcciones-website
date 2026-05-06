import { motion } from "motion/react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { ArrowUpRight, Camera, Trophy, MessageSquare, Coffee, Quote } from "lucide-react";

export function About() {
    const { branding, dynamicContent } = config;
    const { team, awards, about_page, stats } = dynamicContent;

    return (
        <main className="min-h-screen bg-white selection:bg-primary selection:text-white pt-20">
            <SEO 
                title="Estudio — Nuestra Filosofía" 
                description={about_page.story}
            />

            {/* SECTION 01: PERSONAL HERO / PHILOSOPHY - Framed Style like Home Hero */}
            <section className="bg-white px-4 py-8 md:py-12 relative overflow-hidden">
                <div className="relative min-h-[600px] md:min-h-[700px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-zinc-900 shadow-2xl">
                    
                    {/* Background Texture/Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=1400" 
                            className="w-full h-full object-cover grayscale opacity-20" 
                            alt="background texture" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                        <div className="absolute inset-0 arch-grid opacity-20" />
                    </div>

                    <div className="container mx-auto px-6 md:px-16 relative z-10 h-full flex flex-col justify-center py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-5xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[2px] bg-primary" />
                                <span className="text-primary font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-black">ESTUDIO / FILOSOFÍA</span>
                            </div>
                            
                            <h1 className="text-huge-clamped font-display text-white uppercase mb-12 leading-[0.9]">
                                DISEÑO <br />
                                <span className="text-white/20 italic">CON</span> ALMA
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                                <p className="text-xl md:text-2xl font-sans font-medium text-zinc-300 leading-relaxed text-balance">
                                    {about_page.story}
                                </p>
                                <div className="flex gap-16 border-l border-white/10 pl-12">
                                    <div className="flex flex-col">
                                        <span className="text-5xl md:text-6xl font-display font-bold text-primary leading-none mb-2">{stats.experienceYears}+</span>
                                        <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-black">Años de Trayectoria</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-5xl md:text-6xl font-display font-bold text-primary leading-none mb-2">{stats.completedProjects}</span>
                                        <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-black">Proyectos Ejecutados</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 02: VALUES / PILLARS - White Background Architectural Grid */}
            <section className="py-32 md:py-48 bg-white relative overflow-hidden">
                <div className="absolute inset-0 arch-grid-light opacity-50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {about_page.philosophy.values.map((value, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-white border border-industrial-100 p-10 md:p-12 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                            >
                                <span className="text-[10px] font-sans text-industrial-400 uppercase block mb-6 font-bold tracking-widest">PILAR 0{idx + 1}</span>
                                <h3 className="text-3xl font-display text-industrial-900 uppercase tracking-tight group-hover:text-primary transition-colors">{value}</h3>
                                <div className="h-[2px] w-0 group-hover:w-12 bg-primary transition-all duration-500 mt-6" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 03: TEAM & BEHIND THE SCENES */}
            <section className="py-32 md:py-56 bg-zinc-50 relative overflow-hidden border-y border-industrial-100">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-[2px] bg-primary" />
                                <span className="text-primary font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-black">EL EQUIPO</span>
                            </div>
                            <h2 className="text-title-clamped font-display text-industrial-900 uppercase leading-[0.85]">
                                ROSTROS <br /> <span className="text-industrial-200 italic">REALES</span>
                            </h2>
                        </div>
                        <p className="text-lg text-industrial-500 font-sans font-medium max-w-sm leading-relaxed">
                            No somos una corporación fría. Somos un grupo de obsesivos por el detalle, visitando cada obra, tocando cada material.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {team.map((member, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-industrial-900 rounded-[24px] md:rounded-[40px] grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
                                    <h3 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter mb-4">{member.name}</h3>
                                    <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] font-black rounded-full">
                                        {member.role}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Behind the scenes thumbnails */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-24">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="aspect-square bg-white rounded-2xl md:rounded-3xl border border-industrial-100 grayscale hover:grayscale-0 transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
                            >
                                <img 
                                    src={`https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=400&sig=${i+10}`} 
                                    className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity" 
                                    alt="Behind the scenes" 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 04: QUALIFICATIONS & AWARDS - Clean List Style */}
            <section className="py-32 md:py-48 bg-white relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                        <div className="lg:col-span-5">
                            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-10">
                                <Trophy className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-title-clamped font-display text-industrial-900 uppercase leading-[0.9] mb-10">
                                ESTÁNDARES <br /> <span className="text-primary italic">RATIFICADOS</span>
                            </h2>
                            <p className="text-xl text-industrial-500 font-sans font-medium leading-relaxed max-w-md">
                                Nuestra excelencia técnica no es una opinión; ha sido reconocida por las instituciones líderes en arquitectura y sustentabilidad.
                            </p>
                        </div>
                        <div className="lg:col-span-7 space-y-2">
                            {awards.map((award: any, idx: number) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 border-b border-industrial-100 group hover:bg-industrial-50/50 transition-colors rounded-2xl"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <span className="text-[10px] font-sans text-industrial-400 block mb-2 font-bold tracking-widest">{award.year} — PREMIO</span>
                                        <h4 className="text-2xl md:text-3xl font-display text-industrial-900 uppercase group-hover:text-primary transition-colors">{award.title}</h4>
                                    </div>
                                    <div className="md:text-right">
                                        <span className="inline-block px-4 py-1.5 bg-industrial-900 text-white text-[10px] font-sans uppercase tracking-[0.1em] font-bold rounded-lg">
                                            {award.award}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 05: INTERACTIVE Q&A - Card Style from Home */}
            <section className="py-32 md:py-56 bg-zinc-900 relative overflow-hidden rounded-t-[48px] md:rounded-t-[80px]">
                <div className="absolute inset-0 arch-grid opacity-10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="mb-24 md:mb-32">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-primary/20" />
                            <span className="text-primary font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-black">QUÍMICA PERSONAL</span>
                            <div className="h-[1px] w-12 bg-primary/20" />
                        </div>
                        <h2 className="text-huge-clamped font-display text-white uppercase leading-[0.85]">
                            EN <span className="text-white/20 italic">SINTONÍA</span> <br /> CONTIGO
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {about_page.qa.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-zinc-800/50 backdrop-blur-xl border border-white/5 p-12 hover:border-primary/40 transition-all group rounded-[32px] text-center"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:bg-primary transition-all duration-500">
                                    {idx === 0 ? <Camera className="w-8 h-8 text-white" /> : idx === 1 ? <Coffee className="w-8 h-8 text-white" /> : <Quote className="w-8 h-8 text-white" />}
                                </div>
                                <h4 className="text-2xl font-display text-white uppercase mb-6 tracking-tight leading-snug">
                                    {item.question}
                                </h4>
                                <div className="h-[2px] w-12 bg-primary/30 mx-auto mb-8 group-hover:w-20 transition-all duration-500" />
                                <p className="text-lg text-zinc-400 font-sans font-light leading-relaxed italic">
                                    "{item.answer}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA: THE BRIDGE - Light Modern Style */}
            <section className="py-32 md:py-48 bg-white relative overflow-hidden">
                <div className="absolute inset-0 arch-grid-light opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-industrial-900 rounded-[32px] md:rounded-[64px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 shadow-2xl relative overflow-hidden">
                        {/* CTA Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                        
                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-4xl md:text-7xl font-display text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                ¿HAY <span className="text-primary italic">QUÍMICA</span>? <br /> CONSTRUYAMOS.
                            </h2>
                            <p className="text-zinc-400 font-sans text-xl max-w-xl">
                                Cada gran obra comienza con una conversación. Hablemos sobre tu próximo desafío.
                            </p>
                        </div>

                        <div className="relative z-10 shrink-0">
                            <motion.a 
                                href="/contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-6 md:gap-10 bg-primary text-white py-6 px-10 md:py-8 md:px-16 rounded-full text-2xl md:text-3xl font-display uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-xl shadow-primary/20"
                            >
                                CONECTAR <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

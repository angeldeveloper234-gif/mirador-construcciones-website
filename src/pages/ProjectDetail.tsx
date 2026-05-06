import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { useRef } from "react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Quote, ArrowRight, MapPin, Calendar, Layers, Users } from "lucide-react";

export function ProjectDetail() {
    const { id } = useParams();
    const project = config.projects.find(p => p.id === id);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    if (!project) return <div className="h-screen flex items-center justify-center text-white font-stardom text-4xl">Proyecto no encontrado</div>;

    const nextProject = config.projects[(config.projects.indexOf(project) + 1) % config.projects.length];

    return (
        <main className="bg-[#111111] overflow-hidden selection:bg-primary selection:text-black" ref={containerRef}>
            <SEO 
                title={`${project.title} | Caso de Estudio - Mirador Construcciones`} 
                description={project.description}
            />

            {/* HIGH-END HERO */}
            <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover scale-110 grayscale brightness-50"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl"
                    >
                        <span className="text-[10px] font-sans text-primary uppercase tracking-[0.6em] mb-8 block">NARRATIVA ARQUITECTÓNICA</span>
                        <h1 className="text-6xl md:text-[clamp(2rem,7vw,64px)] font-stardom font-medium leading-[0.8] uppercase text-white tracking-tighter mb-12">
                            {project.title}
                        </h1>
                        
                        <div className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-white/10">
                            <DataBit icon={<Calendar size={14}/>} label="Año" value={project.year} />
                            <DataBit icon={<MapPin size={14}/>} label="Ubicación" value={project.location} />
                            <DataBit icon={<Layers size={14}/>} label="Superficie" value={project.area} />
                            <DataBit icon={<Users size={14}/>} label="Categoría" value={project.category} />
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute right-12 top-0 h-full w-[1px] bg-white/5 origin-top hidden lg:block" 
                />
            </section>

            {/* 01: EL CONTEXTO Y EL DESAFÍO */}
            <section className="py-48 bg-[#111111] relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-1 hidden lg:block">
                            <span className="text-[10px] font-sans text-zinc-700 vertical-text uppercase tracking-widest">CONTEXTO</span>
                        </div>
                        <div className="lg:col-span-5">
                            <span className="text-[10px] font-sans text-primary uppercase tracking-[0.3em] mb-8 block">01 / EL DESAFÍO</span>
                            <h2 className="text-4xl md:text-5xl font-stardom text-white mb-12 leading-tight uppercase tracking-tight">
                                Restricciones <br /> <span className="italic">y Oportunidades</span>
                            </h2>
                            <p className="text-xl font-light text-zinc-400 leading-relaxed font-sans first-letter:text-6xl first-letter:font-stardom first-letter:text-primary first-letter:mr-4 first-letter:float-left">
                                {project.content.context}
                            </p>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                <img src={project.gallery?.[0] || project.image} alt="Contexto" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02: PROCESO DE DISEÑO & TECNOLOGÍA BIM */}
            <section className="py-48 bg-[#0F0F0F] relative border-y border-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="aspect-video bg-zinc-900 overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1200" alt="Process" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-sm">
                                        <span className="text-[10px] font-sans text-white tracking-[0.5em] uppercase">BIM COORDINATION MODEL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <span className="text-[10px] font-sans text-primary uppercase tracking-[0.3em] mb-8 block">02 / RIGOR TÉCNICO</span>
                            <h2 className="text-4xl md:text-5xl font-stardom text-white mb-12 leading-tight uppercase">
                                Del Boceto <br /> <span className="italic">al Modelo 3D</span>
                            </h2>
                            <p className="text-xl font-light text-zinc-400 leading-relaxed font-sans mb-12">
                                {project.content.process}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Tag text="Análisis Climático" />
                                <Tag text="Diseño Paramétrico" />
                                <Tag text="Validación BIM" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03: MATERIALIDAD & DETALLE */}
            <section className="py-48 bg-[#111111]">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[10px] font-sans text-primary uppercase tracking-[0.3em] mb-8 block">03 / LA MATERIALIDAD</span>
                    <h2 className="text-5xl md:text-6xl font-stardom text-white mb-24 leading-none uppercase tracking-tighter">
                        Texturas y <span className="italic">Acabados</span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                             <div className="aspect-[21/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                <img src={project.gallery?.[1] || project.image} alt="Materiality" className="w-full h-full object-cover" />
                             </div>
                        </div>
                        <div className="text-left flex flex-col justify-center">
                            <p className="text-lg font-light text-zinc-400 leading-relaxed mb-8">
                                {project.content.materiality}
                            </p>
                            <ul className="space-y-4 border-l border-primary pl-8">
                                <li className="text-xs font-sans text-white uppercase tracking-widest opacity-60">Curaduría de Materiales</li>
                                <li className="text-xs font-sans text-white uppercase tracking-widest opacity-60">Detalles Constructivos</li>
                                <li className="text-xs font-sans text-white uppercase tracking-widest opacity-60">Sostenibilidad Material</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL BREAK */}
            <section className="py-64 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 opacity-5">
                    <Quote size={200} />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Quote className="text-primary mx-auto mb-12" size={48} />
                        <h3 className="text-3xl md:text-5xl font-stardom text-white italic leading-tight max-w-4xl mx-auto mb-12">
                            "{project.content.testimonial}"
                        </h3>
                        <p className="text-xs font-sans text-primary uppercase tracking-[0.5em]">{project.content.credits.client}</p>
                    </motion.div>
                </div>
            </section>

            {/* BEFORE / AFTER & FINAL RESULT */}
            <section className="py-48 bg-[#111111]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-sans text-primary uppercase tracking-[0.3em] mb-8 block">04 / EL IMPACTO</span>
                        <h2 className="text-5xl font-stardom text-white uppercase">La Transformación</h2>
                    </div>
                    
                    {project.beforeAfter ? (
                        <div className="mb-32">
                            <BeforeAfterSlider 
                                beforeImage={project.beforeAfter.before}
                                afterImage={project.beforeAfter.after}
                            />
                        </div>
                    ) : (
                        <div className="aspect-[21/9] w-full overflow-hidden bg-zinc-900 mb-32">
                            <img src={project.image} alt="Result" className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-zinc-900 pt-24">
                        <div className="lg:col-span-2">
                             <h4 className="text-2xl font-stardom text-white uppercase mb-8">Evolución del Proyecto</h4>
                             <p className="text-zinc-400 font-light leading-relaxed">
                                {project.content.result}
                             </p>
                        </div>
                        <div className="bg-[#0A0A0A] p-12 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
                           <h4 className="text-[10px] font-sans text-primary uppercase tracking-[0.3em] mb-12">DATA TÉCNICA</h4>
                           <div className="space-y-8">
                                <TechItem label="Colaboradores" value={project.content.credits.collaborators} />
                                <TechItem label="Tiempo Ejecución" value={project.content.credits.timeline} />
                                <TechItem label="Escala" value={project.area} />
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEXT PROJECT FOOTER */}
            <section className="py-48 border-t border-zinc-900 bg-black relative">
                <Link to={`/projects/${nextProject.id}`} className="group relative block overflow-hidden">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0">
                        <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                    </div>
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="container mx-auto px-6 relative z-10 py-24 text-center">
                        <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-[0.5em] mb-8 block">PRÓXIMO PROYECTO</span>
                        <h4 className="text-6xl md:text-6xl font-stardom text-white uppercase tracking-tighter mb-12 opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                           {nextProject.title}
                        </h4>
                        <div className="inline-flex items-center gap-4 text-white group-hover:gap-8 transition-all">
                            <span className="text-xs font-sans uppercase tracking-widest">Ver Historia</span>
                            <ArrowRight size={24} className="text-primary" />
                        </div>
                    </div>
                </Link>
            </section>

        </main>
    );
}

const DataBit = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
    <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-zinc-500">
            {icon}
            <span className="text-[8px] font-sans uppercase tracking-[0.3em]">{label}</span>
        </div>
        <span className="text-sm font-sans text-white uppercase tracking-widest font-light">{value}</span>
    </div>
);

const Tag = ({ text }: { text: string }) => (
    <span className="px-5 py-2 border border-white/5 bg-white/5 text-[9px] font-sans text-white/50 uppercase tracking-[0.2em] rounded-full">
        {text}
    </span>
);

const TechItem = ({ label, value }: { label: string; value: string }) => (
    <div>
        <p className="text-[8px] font-sans text-zinc-600 uppercase tracking-widest mb-2">{label}</p>
        <p className="text-sm font-sans text-white font-light tracking-wide">{value}</p>
    </div>
);

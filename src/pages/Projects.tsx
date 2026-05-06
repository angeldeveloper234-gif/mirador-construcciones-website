import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";

const CATEGORIES = ["ALL", "Residencial", "Comercial", "Hostelería", "Multifamiliar", "Cultural"];

export function Projects() {
    const [filter, setFilter] = useState("ALL");

    const filteredProjects = filter === "ALL" 
        ? config.projects 
        : config.projects.filter(p => p.category === filter);

    return (
        <main className="pt-32 min-h-screen bg-white relative selection:bg-primary selection:text-white overflow-hidden">
            <SEO 
                title="Proyectos Seleccionados | Mirador Construcciones" 
                description="Explora nuestra selección curada de obras residenciales, comerciales e industriales que redefinen el lujo arquitectónico."
            />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full arch-grid opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Section */}
            <div className="container mx-auto px-6 mb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-8 h-[2px] bg-primary"></span>
                            <span className="text-primary font-sans font-bold uppercase tracking-[0.3em] text-xs">
                                CURATED PORTFOLIO
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-stardom text-zinc-900 uppercase tracking-tighter leading-[0.85]">
                            OBRAS <br /> 
                            <span className="italic text-primary">SELECCIONADAS</span>
                        </h1>
                    </motion.div>
                    
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-zinc-500 font-sans leading-relaxed max-w-sm text-lg">
                            Nuestra arquitectura no es solo construcción; es una narrativa sobre el habitar, la luz y la permanencia. Cada proyecto es un desafío resuelto con precisión técnica.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="container mx-auto px-6 mb-16 border-y border-zinc-100 py-10 relative z-10">
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 relative group pb-2 ${
                                filter === cat ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                            }`}
                        >
                            {cat}
                            {filter === cat && (
                                <motion.div 
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" 
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-6 pb-48 relative z-10">
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => {
                            // Unique layout logic
                            const isWide = idx % 5 === 0;
                            const isTall = idx % 3 === 0 && !isWide;
                            
                            return (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className={`group flex flex-col ${
                                        isWide ? "lg:col-span-8" : isTall ? "lg:col-span-4" : "lg:col-span-6"
                                    }`}
                                >
                                    <Link to={`/projects/${project.id}`} className="block relative">
                                        <div className={`overflow-hidden bg-zinc-100 mb-8 rounded-[24px] md:rounded-[32px] relative shadow-sm group-hover:shadow-xl transition-all duration-700 ${
                                            isWide ? "aspect-[16/9]" : isTall ? "aspect-[4/6]" : "aspect-[4/5]"
                                        }`}>
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                        
                                        <div className="flex justify-between items-start pt-2">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="text-[10px] font-sans text-primary font-bold uppercase tracking-widest">{project.category}</span>
                                                    <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                                                    <span className="text-[10px] font-sans text-zinc-400 uppercase tracking-widest">{project.location}</span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-stardom text-zinc-900 uppercase tracking-tighter group-hover:text-primary transition-colors duration-300 leading-none">{project.title}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-sans text-zinc-400 font-medium">{project.year}</p>
                                                <div className="mt-4 w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}


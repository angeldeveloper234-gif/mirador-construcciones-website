import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { config } from "@/config";
import { ArrowUpRight, MapPin, Calendar, Building2, HardHat, Factory, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturedWorks() {
    const featuredProjects = config.projects.slice(0, 4);

    const getTagStyles = (tag: string) => {
        const t = tag.toLowerCase();
        if (t.includes("entregado")) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        if (t.includes("proceso")) return "bg-blue-500/10 text-blue-400 border-blue-500/20";
        if (t.includes("insignia")) return "bg-amber-500/10 text-amber-500 border-amber-500/20";
        if (t.includes("vendido")) return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    };

    const getCategoryStyles = (category: string) => {
        const c = category.toLowerCase();
        if (c.includes("residencial")) return "bg-zinc-800 text-zinc-300";
        if (c.includes("comercial")) return "bg-blue-950 text-blue-300";
        if (c.includes("industrial")) return "bg-orange-500/10 text-orange-400";
        if (c.includes("habitacional")) return "bg-zinc-800 text-zinc-300";
        return "bg-zinc-800 text-zinc-300";
    };

    const getCategoryIcon = (category: string) => {
        const c = category.toLowerCase();
        if (c.includes("residencial") || c.includes("habitacional")) return <Home className="w-3 h-3" />;
        if (c.includes("comercial")) return <Building2 className="w-3 h-3" />;
        if (c.includes("industrial")) return <Factory className="w-3 h-3" />;
        return <HardHat className="w-3 h-3" />;
    };

    return (
        <section id="projects" className="py-24 md:py-32 bg-white overflow-hidden relative selection:bg-primary selection:text-white">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full arch-grid opacity-10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                        >
                            Nuestro Portafolio
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-zinc-900 text-4xl md:text-6xl font-stardom leading-tight tracking-tighter"
                        >
                            Obras que <span className="italic text-primary font-bold not-italic">trascienden.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <Link 
                            to="/gallery" 
                            className="group flex items-center gap-3 text-zinc-500 hover:text-primary font-sans text-sm uppercase tracking-widest transition-all"
                        >
                            Ver todos los proyectos 
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[1000px] md:min-h-[850px]">
                    {featuredProjects.map((project, idx) => {
                        // Desktop Grid Positions based on the diagram:
                        // 1: Col 1, Span 2 rows
                        // 2: Col 2, Row 1
                        // 3: Col 3, Row 1
                        // 4: Col 2-3, Row 2
                        const gridClasses = [
                            "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3", // Project 1 (Destacado)
                            "md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2", // Project 2
                            "md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2", // Project 3
                            "md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3", // Project 4
                        ][idx];

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={cn(
                                    "group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 flex flex-col min-h-[400px] md:min-h-0",
                                    gridClasses
                                )}
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 flex flex-col h-full p-8 md:p-10 justify-end">
                                    {/* Top Row: Category & Tag (Absolute positioned to top) */}
                                    <div className="absolute top-8 left-8 right-8 flex flex-wrap items-center gap-2">
                                        <span className={cn(
                                            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.1em]",
                                            getCategoryStyles(project.category)
                                        )}>
                                            {getCategoryIcon(project.category)}
                                            {project.category}
                                        </span>
                                        <span className={cn(
                                            "px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] border",
                                            getTagStyles(project.tag)
                                        )}>
                                            {project.tag}
                                        </span>
                                    </div>

                                    {/* Bottom Content Area */}
                                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="flex items-center gap-3 text-white/40 text-[10px] font-sans mb-4">
                                            <span className="flex items-center gap-1.5 uppercase tracking-widest font-bold">
                                                <MapPin className="w-3 h-3 text-primary" /> {project.location}
                                            </span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                                            <span className="flex items-center gap-1.5 uppercase tracking-widest font-bold">
                                                <Calendar className="w-3 h-3 text-primary" /> {project.year}
                                            </span>
                                        </div>
                                        
                                        <h3 className={cn(
                                            "text-white font-stardom mb-4 leading-[1.1] tracking-tighter",
                                            idx === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                                        )}>
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-zinc-400 text-sm font-sans line-clamp-2 mb-8 group-hover:text-white/80 transition-colors max-w-sm">
                                            {project.subtitle}
                                        </p>

                                        {/* Highlights Bar */}
                                        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-8 mt-4">
                                            {project.highlights?.map((h: any, i: number) => (
                                                <div key={i} className="flex flex-col gap-1">
                                                    <span className="text-[8px] text-white/30 uppercase tracking-widest font-bold leading-none">{h.label}</span>
                                                    <span className="text-xs md:text-sm text-primary font-bold font-sans tracking-tight">{h.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Button - Floating Arrow */}
                                    <Link 
                                        to={`/projects/${project.id}`}
                                        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500"
                                    >
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

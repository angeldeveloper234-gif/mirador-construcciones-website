import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { config } from "@/config";

export function BeforeAfter() {
    const [sliderPos, setSliderPos] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const project = config.projects[0]; // Using Casa La Cañada as example
    const { dynamicContent } = config;
    const immersive = dynamicContent.section_details.Immersive;

    if (!project.beforeAfter) return null;

    const handleMove = (e: any) => {
        if (!isResizing || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const relativeX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
        setSliderPos(percentage);
    };

    const handleDown = () => setIsResizing(true);
    const handleUp = () => setIsResizing(false);

    useEffect(() => {
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("touchend", handleUp);
        return () => {
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("touchend", handleUp);
        };
    }, []);

    return (
        <section id="experience" className="py-60 bg-[#080808] relative overflow-hidden selection-primary">
            {/* Fine Architecture Grid Overlay */}
            <div className="absolute inset-0 arch-grid pointer-events-none opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-24">
                    <div className="max-w-3xl">
                        <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-8 block font-bold">Experiencia Inmersiva</p>
                        <h2 className="text-white leading-none uppercase tracking-tighter italic">
                            <span className="text-title-clamped block font-stardom">Del Boceto a la <span className="font-bold not-italic text-primary">Realidad.</span></span>
                        </h2>
                        <p className="text-zinc-500 font-sans font-light text-xl mt-12 leading-relaxed max-w-xl italic">
                            Nuestra ejecución técnica garantiza que la visión se materialice sin compromisos. 
                            Cada render es un compromiso de realidad constructiva.
                        </p>
                    </div>

                    {/* Functional Block 1: Steps */}
                    <div className="flex flex-col gap-12 border-l-2 border-primary/20 pl-16 py-4">
                        {immersive.steps.slice(0, 3).map((step: any, index: number) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="max-w-xs"
                            >
                                <h3 className="text-white font-stardom text-2xl mb-4 uppercase tracking-widest leading-none">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-500 font-sans font-light text-sm leading-loose italic opacity-80">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Slider Block */}
                <div className="relative group p-px bg-white/5 shadow-2xl">
                    <div className="absolute -top-12 left-0 right-0 flex justify-between items-center px-4">
                        <span className="text-[9px] font-sans text-zinc-500 uppercase tracking-[0.5em] font-bold">Desliza para comparar</span>
                        <div className="h-px flex-1 mx-8 bg-white/5 md:block hidden" />
                        <span className="text-[9px] font-sans text-zinc-500 uppercase tracking-[0.5em] font-bold md:block hidden">Interactive Visualization</span>
                    </div>

                    <div 
                        ref={containerRef}
                        className="relative w-full aspect-[16/9] md:aspect-[21/9] cursor-ew-resize select-none overflow-hidden border border-white/5"
                        onMouseMove={handleMove}
                        onTouchMove={handleMove}
                        onMouseDown={handleDown}
                        onTouchStart={handleDown}
                    >
                        {/* After Image */}
                        <img src={project.beforeAfter.after} className="absolute inset-0 w-full h-full object-cover" alt="Realidad" />

                        {/* Before Image with Clip */}
                        <div 
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                        >
                            <img src={project.beforeAfter.before} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" alt="Plano/Render" />
                        </div>

                        {/* Slider UI */}
                        <div className="absolute inset-y-0 w-px bg-primary z-10" style={{ left: `${sliderPos}%` }}>
                            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/60 backdrop-blur-xl border border-primary/20 rounded-full flex items-center justify-center">
                                <div className="flex gap-2 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <div className="w-[1px] h-6 bg-white/10" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute top-12 left-12 z-20 pointer-events-none">
                             <span className="text-[8px] font-sans text-primary uppercase font-black italic tracking-[0.4em] bg-black/80 px-4 py-2 border border-primary/10">PROYECTO 3D</span>
                        </div>
                        <div className="absolute top-12 right-12 z-20 pointer-events-none">
                             <span className="text-[8px] font-sans text-primary uppercase font-black italic tracking-[0.4em] bg-black/80 px-4 py-2 border border-primary/10">OBRA FINAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

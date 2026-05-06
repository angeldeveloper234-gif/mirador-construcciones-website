import { motion } from "motion/react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { useMemo } from "react";
import { Link } from "react-router-dom";

// Behind the scenes / Studio images
const studioImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"  
];

const allImages = [
    ...config.projects.map(p => p.image).slice(0, 10),
    ...studioImages
].sort(() => Math.random() - 0.5);

export function Gallery() {
    // Large virtual canvas size
    const canvasSize = 4000;

    const galleryItems = useMemo(() => {
        return allImages.map((src, index) => ({
            src,
            depth: (index % 4) + 1,
            // Distributed across the canvas area
            x: Math.random() * (canvasSize - 800) + 400,
            y: Math.random() * (canvasSize - 800) + 400,
            size: 350 + (Math.random() * 200),
            rotation: Math.random() * 8 - 4,
        }));
    }, []);

    return (
        <main className="fixed inset-0 bg-black overflow-hidden cursor-move touch-none select-none z-[60] selection-primary">
            <SEO title="Galeria" description="Explora el proceso de Mirador Construcciones." />

            {/* Labels and Navigation - HIGHEST Z */}
            <div className="fixed top-24 left-12 z-[200]">
                <Link to="/" className="text-white/40 hover:text-white font-sans text-[10px] uppercase tracking-[0.5em] transition-all flex items-center gap-4 group">
                    <span className="group-hover:-translate-x-2 transition-transform">←</span> ESTUDIO
                </Link>
            </div>

            <div className="fixed bottom-24 left-12 z-[200] pointer-events-none">
                 <h1 className="text-white font-stardom text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase leading-[0.8] border-l-4 border-primary pl-10 py-4 tracking-tighter italic">
                    Backstage<br/>
                    <span className="text-primary/50 text-[10px] font-sans tracking-[0.6em] block mt-4 uppercase italic font-black not-italic">Exploración Libre</span>
                 </h1>
            </div>

            {/* DRAGGABLE CANVAS - Robust Surface */}
            <motion.div 
                drag
                dragMomentum={true}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
                // Constraints set so visible area is always part of the canvas
                dragConstraints={{
                    left: -(canvasSize - window.innerWidth),
                    right: 0,
                    top: -(canvasSize - window.innerHeight),
                    bottom: 0,
                }}
                className="absolute top-0 left-0 bg-[#080808] z-[100]"
                style={{ width: canvasSize, height: canvasSize }}
            >
                 {/* Architectural Grid Overlay on Canvas */}
                 <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />

                 {galleryItems.map((item, index) => (
                    <div 
                        key={index}
                        className="absolute pointer-events-auto"
                        style={{ 
                            left: item.x,
                            top: item.y,
                            width: item.size,
                            zIndex: item.depth * 10,
                            transform: `rotate(${item.rotation}deg)`
                        }}
                    >
                        <FloatingItem src={item.src} depth={item.depth} />
                    </div>
                ))}
            </motion.div>

            {/* Deep Static Background Layers */}
            <div className="fixed inset-0 pointer-events-none z-[50]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 z-10" />
                 <div className="w-full h-full arch-grid opacity-[0.05]" />
            </div>
        </main>
    );
}

function FloatingItem({ src, depth }: { src: string; depth: number }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 100 }}
            className="w-full h-full border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] bg-black overflow-hidden group"
        >
            <img 
                src={src} 
                alt="Architecture" 
                className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out
                    ${depth === 1 ? 'brightness-50 grayscale' : 'brightness-75 grayscale-0'}
                    group-hover:brightness-110 group-hover:grayscale-0 group-hover:scale-110 pointer-events-none`}
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            {/* Subtle Label on Hover */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20">
                <span className="text-[8px] font-sans text-white uppercase tracking-[0.4em] bg-black/50 px-3 py-1 backdrop-blur-sm">Captura de Proceso</span>
            </div>
        </motion.div>
    );
}

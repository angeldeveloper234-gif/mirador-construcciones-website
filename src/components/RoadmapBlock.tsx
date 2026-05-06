import { motion } from 'motion/react';

interface RoadmapBlockProps {
    step: string;
    title: string;
    desc: string;
    index: number;
}

export function RoadmapBlock({ step, title, desc, index }: RoadmapBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l border-white/10 py-4 group hover:border-primary transition-colors duration-500"
        >
            <span className="absolute -left-[5px] top-4 w-[9px] h-[9px] bg-[#111111] border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-500" />
            
            <div className="flex flex-col gap-2">
                <span className="text-xs font-sans text-primary font-black tracking-widest">PHASE {step}</span>
                <h3 className="text-xl font-stardom text-white uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-500">{title}</h3>
                <p className="text-zinc-500 text-sm font-light max-w-sm leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}

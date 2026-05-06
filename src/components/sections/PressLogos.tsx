import { motion } from "motion/react";
import { config } from "@/config";

export function PressLogos() {
    return (
        <section className="py-24 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 grayscale opacity-60">
                    <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest block mb-8 md:mb-0">
                        RECONOCIMIENTOS & PRENSA
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
                        {config.dynamicContent.awards.map((award, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <span className="text-xs font-sans text-zinc-900 font-black mb-1 group-hover:text-[#8B7345] transition-colors">{award.award}</span>
                                <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">{award.title} / {award.year}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

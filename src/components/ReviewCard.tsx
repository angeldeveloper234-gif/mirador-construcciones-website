import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    role: string;
    text: string;
    delay?: number;
}

export function ReviewCard({ name, role, text, delay = 0 }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className="relative p-8 border border-white/10 bg-[#161616] hover:border-white/30 transition-colors group"
        >
            <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />
            
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-white text-white" />
                ))}
            </div>

            <p className="text-zinc-400 font-sans font-light text-sm leading-relaxed mb-8 min-h-[80px]">
                "{text}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-sans text-xs font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-white text-xs font-bold uppercase tracking-widest">{name}</p>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}

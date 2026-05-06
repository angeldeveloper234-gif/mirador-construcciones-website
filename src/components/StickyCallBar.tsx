import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';
import { config } from '@/config';

export function StickyCallBar() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 bg-[#111111] border-t border-white/10"
        >
            <a
                href={`tel:${config.branding.whatsapp}`}
                className="flex items-center justify-center gap-3 py-4 border-r border-white/10 active:bg-white/5 transition-colors"
            >
                <Phone size={16} className="text-white" />
                <span className="text-[10px] font-sans uppercase tracking-widest text-white">Llamar</span>
            </a>
            <a
                href={`https://wa.me/${config.branding.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 bg-primary text-black active:bg-white transition-colors"
            >
                <MessageSquare size={16} />
                <span className="text-[10px] font-sans uppercase tracking-widest font-black">WhatsApp</span>
            </a>
        </motion.div>
    );
}

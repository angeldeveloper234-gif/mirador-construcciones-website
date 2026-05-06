import React from 'react';
import { motion } from 'motion/react';
import { config } from '@/config';

export function Stats() {
    const data = [
        { label: "AÑOS DE EXPERIENCIA EN EL SECTOR.", value: "15", suffix: "+" },
        { label: "CLIENTES SATISFECHOS", value: "250", suffix: "+" },
        { label: "NUESTRA VISIÓN NACIÓ DE UN DESAFÍO AMBICIOSO.", value: "85", suffix: "%" },
        { label: "NUESTRA VISIÓN NACIÓ DE UN DESAFÍO AMBICIOSO.", value: "12", suffix: "%" },
    ];

    return (
        <section className="py-8 bg-white relative overflow-hidden border-b border-industrial-100">

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex-1 flex flex-col items-center px-2 py-4"
                            >
                                <div className="flex items-baseline mb-2">
                                    <span className="text-5xl md:text-6xl font-display font-bold text-industrial-900 tracking-tighter">
                                        {item.value}
                                    </span>
                                    <span className="text-3xl font-display font-bold text-primary ml-0.5">
                                        {item.suffix}
                                    </span>
                                </div>
                                <p className="text-industrial-400 font-sans text-[10px] tracking-tight text-center max-w-[160px] leading-relaxed uppercase font-medium">
                                    {item.label}
                                </p>
                            </motion.div>
                            {index < data.length - 1 && (
                                <div className="hidden lg:block w-px h-12 bg-industrial-200 opacity-30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


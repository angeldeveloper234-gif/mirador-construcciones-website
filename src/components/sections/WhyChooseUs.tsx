import React from 'react';
import { motion } from 'motion/react';
import { Cpu, BarChart3, Trophy, Users, CheckCircle2, PiggyBank } from 'lucide-react';

export const WhyChooseUs = () => {
    const features = [
        {
            title: "Tecnología de Punta",
            description: "Usamos herramientas BIM y software de gestión de obra de última generación para garantizar precisión total.",
            icon: Cpu,
            side: "left"
        },
        {
            title: "Planeación Estratégica",
            description: "Cada proyecto cuenta con una hoja de ruta detallada, asegurando que plazos y presupuestos se cumplan.",
            icon: BarChart3,
            side: "left"
        },
        {
            title: "Resultados de Excelencia",
            description: "Nos enfocamos en la durabilidad y el detalle, entregando obras que superan los estándares industriales.",
            icon: Trophy,
            side: "left"
        },
        {
            title: "Confianza Certificada",
            description: "Con más de 10 años en el mercado, hemos construido una sólida reputación basada en la honestidad.",
            icon: CheckCircle2,
            side: "right"
        },
        {
            title: "Equipo de Expertos",
            description: "Ingenieros y arquitectos altamente capacitados que aportan soluciones innovadoras a desafíos complejos.",
            icon: Users,
            side: "right"
        },
        {
            title: "Ahorro Inteligente",
            description: "Nuestra metodología permite optimizar recursos, reduciendo desperdicios y costos innecesarios.",
            icon: PiggyBank,
            side: "right"
        }
    ];

    const leftFeatures = features.filter(f => f.side === "left");
    const rightFeatures = features.filter(f => f.side === "right");

    return (
        <section className="pt-32 pb-0 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap z-0">
                <span className="text-[120px] md:text-[180px] lg:text-[240px] font-display font-bold text-industrial-900 leading-none">
                    WHY CHOOSE US
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <span className="w-8 h-[2px] bg-primary"></span>
                        <span className="text-primary font-sans font-bold uppercase tracking-[0.3em] text-xs">
                            Nuestra Diferencia
                        </span>
                        <span className="w-8 h-[2px] bg-primary"></span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display text-industrial-900 font-bold max-w-4xl mx-auto leading-[1.1] tracking-[-0.02em]"
                    >
                        Innovación y Calidad en <br />
                        <span className="text-primary italic">Cada Proyecto</span>
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch relative">
                    {/* Left Features */}
                    <div className="space-y-16 order-2 lg:order-1 lg:pb-32">
                        {leftFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center lg:items-end text-center lg:text-right group"
                            >
                                <div className="w-14 h-14 bg-industrial-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-industrial-100">
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-display text-industrial-900 font-bold mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-industrial-500 font-sans text-sm leading-relaxed max-w-[280px]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center items-end self-end">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-[450px] flex items-end"
                        >
                            {/* Decorative Circles */}
                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-industrial-100 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-industrial-100 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
                            
                            <img 
                                src="/ej-construccion/worker-transparent.png" 
                                alt="Constructor Mirador" 
                                className="w-full h-auto drop-shadow-2xl relative z-10 block align-bottom"
                            />
                        </motion.div>
                    </div>

                    {/* Right Features */}
                    <div className="space-y-16 order-3 lg:pb-32">
                        {rightFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                            >
                                <div className="w-14 h-14 bg-industrial-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-industrial-100">
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-display text-industrial-900 font-bold mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-industrial-500 font-sans text-sm leading-relaxed max-w-[280px]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Accents */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-industrial-900/5 blur-[120px] rounded-full" />
        </section>
    );
};

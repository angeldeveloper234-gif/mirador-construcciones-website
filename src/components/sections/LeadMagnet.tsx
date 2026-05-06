import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '@/config';
import { MiradorButton } from '@/components/ui/MiradorButton';
import { ArrowUpRight } from 'lucide-react';

export const LeadMagnet = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        m2: 120,
        email: ''
    });
    const [calculation, setCalculation] = useState(0);

    const data = config.dynamicContent.section_details.LeadMagnet_Calculator;

    useEffect(() => {
        let base = 18000; // Base para Oficinas/Retail
        if (formData.type === 'Residencial Alta Gama') base = 25000;
        if (formData.type === 'Interiorismo & Retail') base = 15000;
        
        setCalculation(formData.m2 * base);
    }, [formData.m2, formData.type]);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else {
            alert(`Simulación enviada. Inversión estimada: $${calculation.toLocaleString()} MXN`);
        }
    };

    return (
        <section id="calculator" className="py-40 bg-white relative border-t border-industrial-200">
            {/* Blueprint Grid Layer - Light Theme */}
            <div className="absolute inset-0 arch-grid pointer-events-none opacity-40" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center relative z-10">
                <div>
                     <p className="text-primary font-sans text-xs tracking-widest mb-8 block font-bold">Simulación de Diseño</p>
                    <h2 className="text-huge-clamped font-display text-industrial-900 leading-tight tracking-tight mb-12 capitalize">
                        Presupuesto <br/> de <span className="font-bold not-italic">Visión.</span>
                    </h2>
                    <p className="text-industrial-600 font-sans text-xl leading-relaxed mb-16 max-w-xl">
                        Obtenga un rango de inversión preliminar para su proyecto en menos de 1 minuto. 
                        Ingeniería de datos para decisiones precisas.
                    </p>

                    <div className="flex gap-12 items-center">
                        <div className="text-left group">
                            <span className="text-xs font-sans text-industrial-500 tracking-tight block font-bold mb-2 group-hover:text-primary transition-colors">Inversión Estimada</span>
                            <span className="text-4xl md:text-6xl font-display text-industrial-900 group-hover:italic transition-all duration-700">
                                 ${calculation.toLocaleString()}
                                <span className="text-xs text-primary font-sans tracking-widest ml-4 font-bold">MXN</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-industrial-50 border border-industrial-200 p-10 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="mb-12">
                        <span className="text-xs font-sans text-industrial-500 tracking-tight mb-4 block font-medium">Paso 0{step} de 03</span>
                        <div className="flex gap-2">
                             {[1, 2, 3].map(s => (
                                 <div key={s} className={`h-1.5 flex-1 transition-all duration-700 ${step >= s ? 'bg-primary' : 'bg-industrial-200'}`} />
                             ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="st1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                                <h3 className="text-2xl font-display text-industrial-900 font-bold capitalize">Tipo de Obra</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {['Residencial Alta Gama', 'Oficinas & Corporativo', 'Interiorismo & Retail'].map((opt) => (
                                        <motion.button
                                            key={opt}
                                            whileHover={{ scale: 1.02, x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => { setFormData({ ...formData, type: opt }); nextStep(); }}
                                            className="p-6 border-l-4 border-industrial-200 text-left font-sans text-sm font-bold hover:border-primary hover:bg-white transition-all text-industrial-500 hover:text-industrial-900 bg-white/50 flex items-center justify-between group/opt"
                                        >
                                            {opt}
                                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/opt:opacity-100 transition-opacity text-primary" />
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="st2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                                <h3 className="text-2xl font-display text-industrial-900 font-bold capitalize">Metros Cuadrados: <span className="text-primary italic">{formData.m2}</span></h3>
                                <input 
                                    type="range" 
                                    min="50" 
                                    max="2000" 
                                    value={formData.m2} 
                                    onChange={(e) => setFormData({...formData, m2: parseInt(e.target.value)})}
                                    className="w-full h-2 bg-industrial-200 appearance-none cursor-pointer outline-none accent-primary" 
                                />
                                <div className="flex justify-between font-sans text-xs text-industrial-500 font-bold">
                                    <span>50 m²</span>
                                    <span>2000 m²</span>
                                </div>
                                <MiradorButton 
                                    onClick={nextStep}
                                    variant="dark"
                                    className="w-full justify-between"
                                >
                                    Confirmar Superficie
                                </MiradorButton>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div key="st3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                                <h3 className="text-2xl font-display text-industrial-900 font-bold capitalize">Reciba el Dossier</h3>
                                <div className="space-y-8">
                                     <div className="relative group">
                                        <label className="text-xs tracking-tight text-industrial-500 font-sans mb-3 block group-focus-within:text-primary transition-colors">Email para el reporte técnico</label>
                                        <input
                                            type="email"
                                            placeholder="arquitectura@vision.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-transparent border-b border-industrial-200 p-4 focus:border-primary outline-none text-industrial-900 transition-all font-sans text-lg placeholder:text-industrial-300"
                                        />
                                    </div>
                                    <MiradorButton 
                                        onClick={nextStep}
                                        variant="dark"
                                        className="w-full justify-between"
                                    >
                                        Calcular Inversión Final
                                    </MiradorButton>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

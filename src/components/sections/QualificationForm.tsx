import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MiradorButton } from '@/components/ui/MiradorButton';

export const QualificationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        status: '',
        investment: '',
        vision: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = (e?: any) => {
        if (e) e.preventDefault();
        if (step < 4) setStep(step + 1);
        else {
            alert("Solicitud de Visión Enviada. Nuestro equipo analizará su perfil.");
        }
    };

    return (
        <section id="apply" className="py-40 bg-black relative border-t border-white/5 selection:bg-primary selection:text-black">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Left Side: Copy */}
                    <div className="sticky top-40">
                         <p className="text-primary font-sans text-[10px] tracking-[0.5em] uppercase mb-8 block font-bold">Aplica Ahora</p>
                        <h2 className="text-5xl md:text-[64px] font-stardom text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                            Cruce el <br/>
                            <span className="text-primary italic font-bold">Umbral.</span>
                        </h2>
                        <p className="text-zinc-500 font-sans font-light text-xl leading-relaxed italic max-w-md mb-16">
                            Una llamada de 15 minutos para descifrar el ADN de su proyecto. Sin compromisos, solo visión.
                        </p>

                        <div className="flex flex-col gap-8">
                            <a href="#" className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                                    <span className="text-primary text-xs">W</span>
                                </div>
                                <span className="text-white font-sans text-[10px] uppercase tracking-[0.3em] group-hover:text-primary transition-colors font-bold">WhatsApp Prioritario</span>
                            </a>
                            <a href="#" className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                                    <span className="text-primary text-xs">C</span>
                                </div>
                                <span className="text-white font-sans text-[10px] uppercase tracking-[0.3em] group-hover:text-primary transition-colors font-bold">Programar en Calendly</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Step Form */}
                    <div className="bg-[#0A0A0A] border border-white/5 p-12 md:p-20 relative overflow-hidden">
                        <div className="mb-16">
                            <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-[0.5em] mb-4 block">Siguiente Escalón</span>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4].map(s => (
                                    <div key={s} className={`h-1 flex-1 transition-all duration-700 ${step >= s ? 'bg-primary' : 'bg-white/5'}`} />
                                ))}
                            </div>
                        </div>

                        <form onSubmit={nextStep}>
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div key="st1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <h3 className="text-2xl font-stardom text-white uppercase tracking-widest">Paso 1: Identidad</h3>
                                        <InputField label="Nombre Completo" name="name" value={formData.name} onChange={handleChange} />
                                        <InputField label="Email de Contacto" name="email" type="email" value={formData.email} onChange={handleChange} />
                                        <InputField label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="st2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <h3 className="text-2xl font-stardom text-white uppercase tracking-widest">Paso 2: Estado del Proyecto</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {['Tengo terreno', 'Busco locación', 'Solo idea'].map((opt) => (
                                                <motion.button
                                                    key={opt}
                                                    type="button"
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => { setFormData({ ...formData, status: opt }); nextStep(); }}
                                                    className={`p-8 border text-left font-sans text-[10px] uppercase tracking-widest transition-all duration-500 ${formData.status === opt ? 'bg-primary text-black border-primary font-bold' : 'bg-transparent text-white/40 border-white/5 hover:border-primary/20'}`}
                                                >
                                                    {opt}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="st3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <h3 className="text-2xl font-stardom text-white uppercase tracking-widest">Paso 3: Rango de Inversión</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {['Menos de $150k', '$150k - $300k', '$300k - $600k', '$600k+'].map((range) => (
                                                <motion.button
                                                    key={range}
                                                    type="button"
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => { setFormData({ ...formData, investment: range }); nextStep(); }}
                                                    className={`p-8 border text-left font-sans text-[10px] uppercase tracking-widest transition-all duration-500 ${formData.investment === range ? 'bg-primary text-black border-primary font-bold' : 'bg-transparent text-white/40 border-white/5 hover:border-primary/20'}`}
                                                >
                                                    {range}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="st4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <h3 className="text-2xl font-stardom text-white uppercase tracking-widest">Paso 4: Visión</h3>
                                        <textarea
                                            name="vision"
                                            value={formData.vision}
                                            onChange={handleChange}
                                            placeholder="Cuéntenos su idea / sueños para este espacio..."
                                            className="w-full bg-transparent border-b border-white/10 p-4 focus:border-primary outline-none text-white transition-all min-h-[150px] font-sans text-lg italic"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-16 flex justify-between items-center">
                                {step > 1 && (
                                    <button type="button" onClick={() => setStep(step - 1)} className="text-[10px] font-sans text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">
                                        ← Atrás
                                    </button>
                                )}
                                {((step === 1 || step === 4) || (step === 2 || step === 3)) && (
                                <MiradorButton 
                                    type="submit"
                                    variant="white"
                                    className="ml-auto"
                                >
                                    {step === 4 ? 'SOLICITAR CONSULTA' : 'CONTINUAR'}
                                </MiradorButton>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, name, type = "text", value, onChange }: any) => (
    <div className="relative group">
        <label className="text-[9px] tracking-[0.3em] text-zinc-500 uppercase font-sans mb-4 block group-focus-within:text-primary transition-colors">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-transparent border-b border-white/5 p-4 focus:border-primary outline-none text-white transition-all duration-700 font-sans text-lg"
        />
    </div>
);

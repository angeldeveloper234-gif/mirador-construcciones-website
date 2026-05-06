import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Layers, Check } from "lucide-react";
import { config } from "@/config";

const schema = z.object({
    name: z.string().min(2, "Requerido"),
    phone: z.string().min(10, "Mínimo 10 dígitos"),
    service: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(5, "Describe tu proyecto"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { dynamicContent, branding, services } = config;
    const { city, localAnchor } = dynamicContent;

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        const text = `Hola, mi nombre es ${data.name}. Me interesa el servicio de ${data.service}. Mensaje: ${data.message}`;
        const url = `https://wa.me/${branding.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        reset();
    };

    return (
        <section id="contact" className="relative py-32 bg-[#0A0A0A] border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Left: Info */}
                    <div>
                        <p className="text-primary font-sans text-xs tracking-[0.5em] uppercase font-black mb-8">
                            CONTACTO DIRECTO
                        </p>
                        <h2 className="text-5xl md:text-6xl font-stardom text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                            COTIZACIÓN <br />
                            <span className="text-primary italic">SIN COSTO</span>
                        </h2>

                        <div className="space-y-12 mb-16">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-primary/5 border border-primary/20">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-[10px] mb-2 font-black">Sede Principal</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{localAnchor}, {city}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-primary/5 border border-primary/20">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-[10px] mb-2 font-black">WhatsApp</h4>
                                    <p className="text-zinc-400 text-lg font-stardom tracking-widest leading-none">{branding.whatsapp}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-primary/5 border border-primary/20">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-[10px] mb-2 font-black">Horario</h4>
                                    <p className="text-zinc-400 text-sm">Lunes a Sábado: 8:00 – 19:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Differentiators */}
                        <div className="border border-[#CBB37E]/30 p-8 bg-[#CBB37E]/[0.03] relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CBB37E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
                            <p className="text-[#CBB37E] text-[10px] font-black uppercase tracking-[0.3em] mb-8 relative z-10">POR QUÉ MIRADOR CONSTRUCCIONES</p>
                            <ul className="space-y-5 relative z-10">
                                {[
                                    "Diseño vigente y funcional",
                                    "Gestión integral de licencias",
                                    "Supervisión técnica de obra",
                                    "Exclusividad en cada detalle",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 text-xs text-zinc-400 font-sans uppercase tracking-widest group/item">
                                        <div className="w-1.5 h-1.5 bg-[#CBB37E] group-hover/item:scale-150 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white/5 p-8 md:p-12 border border-white/5"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">Nombre Completo</label>
                                <input
                                    {...register("name")}
                                    className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-700 text-sm"
                                    placeholder="EJ. JULIÁN CASAS"
                                />
                                {errors.name && <span className="text-[10px] text-red-500 uppercase font-sans">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">WhatsApp / Teléfono</label>
                                <input
                                    {...register("phone")}
                                    className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-700 text-sm"
                                    placeholder="984 XXX XX XX"
                                />
                                {errors.phone && <span className="text-[10px] text-red-500 uppercase font-sans">{errors.phone.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">Interés Principal</label>
                                <select
                                    {...register("service")}
                                    className="w-full bg-zinc-900 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                                >
                                    <option value="">SELECCIONA UNA OPCIÓN</option>
                                    {services.map((s) => (
                                        <option key={s.id} value={s.title}>{s.title}</option>
                                    ))}
                                    <option value="Otro">Otro</option>
                                </select>
                                {errors.service && <span className="text-[10px] text-red-500 uppercase font-sans">{errors.service.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest">Mensaje</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-zinc-700 text-sm"
                                    placeholder="DESCRIBE TU PROYECTO..."
                                />
                                {errors.message && <span className="text-[10px] text-red-500 uppercase font-sans">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary text-black hover:bg-white rounded-none py-8 uppercase tracking-[0.4em] text-xs font-black transition-all duration-700 shadow-[0_20px_40px_-10px_rgba(203,179,126,0.2)]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "PROCESANDO..." : "INICIAR PROYECTO"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

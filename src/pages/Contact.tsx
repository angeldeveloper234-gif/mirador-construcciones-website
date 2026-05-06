import { motion } from "motion/react";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MiradorButton } from "@/components/ui/MiradorButton";
import { Mail, Phone, MapPin, Instagram, Linkedin, Pin as Pinterest, Calendar, ArrowRight, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Por favor, ingresa tu nombre"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(8, "Ingresa un número válido"),
  message: z.string().min(5, "Contanos un poco sobre tu proyecto"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const { branding, dynamicContent } = config;
  const { contact_page } = dynamicContent;
  const { hero, scheduling, info } = contact_page;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulamos envío y redirección a WhatsApp para mayor conversión inmediata
    const text = `Hola! Soy ${data.name}. Mi correo es ${data.email}. Mensaje: ${data.message}`;
    const url = `https://wa.me/${branding.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    reset();
  };

  const socialIcons: Record<string, any> = {
    instagram: Instagram,
    linkedin: Linkedin,
    pinterest: Pinterest
  };

  return (
    <main className="selection-primary bg-white pt-16 md:pt-20">
      <SEO 
        title="Contacto | Mirador Construcciones" 
        description="Ponte en contacto con Mirador Construcciones para tu próximo proyecto de diseño o construcción. Agendá una llamada de descubrimiento hoy."
      />

      {/* 1. HERO SECTION - Framed approach like Home */}
      <section className="bg-white px-4 pb-12 pt-8 relative overflow-x-hidden">
        <div className="relative min-h-[450px] md:min-h-[550px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-zinc-900 group shadow-2xl flex items-center">
          
          {/* Architectural Grid Background */}
          <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />
          
          {/* Content Container */}
          <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase font-black">
                  CERO FRICCIÓN / RESPUESTA INMEDIATA
                </span>
              </div>
              
              <h1 className="text-huge-clamped font-display text-white mb-8 uppercase leading-[1.1] tracking-tight">
                {hero.title.split(' ')[0]} <br className="hidden md:block" />
                <span className="text-primary italic font-bold">{hero.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-2xl font-sans font-medium leading-relaxed">
                {hero.subtitle}
              </p>
            </motion.div>
          </div>
          
          {/* Subtle Accent Light */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 arch-grid-light opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Info & Map */}
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 text-primary">
                    <Mail className="w-5 h-5" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-black">Email Profesional</span>
                  </div>
                  <a href={`mailto:${branding.email}`} className="text-2xl text-industrial-900 hover:text-primary transition-colors font-display font-bold tracking-tight block">
                    {branding.email}
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 text-primary">
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-black">Teléfono Directo</span>
                  </div>
                  <a href={`tel:${branding.phone}`} className="text-2xl text-industrial-900 hover:text-primary transition-colors font-display font-bold tracking-tight block">
                    {branding.phone}
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-black">Ubicación del Estudio</span>
                  </div>
                  <p className="text-industrial-900 font-display text-xl font-bold uppercase tracking-tight">
                    {info.address}
                  </p>
                </div>
                
                <div className="aspect-video w-full rounded-3xl overflow-hidden border border-industrial-200 shadow-2xl group relative">
                  <div className="absolute inset-0 bg-industrial-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <iframe 
                    src={info.google_maps_embed}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms]"
                  />
                </div>
              </motion.div>

              {/* Socials */}
              <div className="pt-8 border-t border-industrial-100">
                <span className="text-[10px] font-sans text-industrial-400 uppercase tracking-[0.5em] mb-8 block font-black">COMUNIDAD & REDES</span>
                <div className="flex flex-wrap gap-8">
                  {info.socials.map((social: { platform: string; url: string; icon: string }) => {
                    const Icon = socialIcons[social.icon] || Instagram;
                    return (
                      <a 
                        key={social.platform}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-industrial-600 hover:text-primary transition-all"
                      >
                        <div className="w-12 h-12 rounded-full border border-industrial-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                          <Icon className="w-5 h-5 group-hover:text-primary" />
                        </div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-black">{social.platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Form & Scheduling */}
            <div className="space-y-12">
              
              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-industrial-200 p-10 md:p-14 shadow-2xl shadow-industrial-900/5 relative overflow-hidden"
              >
                {/* Subtle blueprint pattern inside */}
                <div className="absolute inset-0 arch-grid-light opacity-[0.03] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-12">
                    <h3 className="text-3xl font-display text-industrial-900 font-bold uppercase tracking-tight mb-2">Envíanos un mensaje</h3>
                    <p className="text-industrial-400 text-[10px] font-sans uppercase tracking-[0.3em] font-black">{info.response_time}</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans text-industrial-400 uppercase tracking-widest font-black">Nombre Completo</label>
                        <input
                          {...register("name")}
                          className="w-full bg-industrial-50 border border-industrial-100 rounded-2xl px-6 py-4 text-industrial-900 focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-industrial-300 text-sm"
                          placeholder="Tu nombre aquí..."
                        />
                        {errors.name && <span className="text-[10px] text-red-500 uppercase font-sans font-bold">{errors.name.message}</span>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans text-industrial-400 uppercase tracking-widest font-black">Correo Electrónico</label>
                        <input
                          {...register("email")}
                          className="w-full bg-industrial-50 border border-industrial-100 rounded-2xl px-6 py-4 text-industrial-900 focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-industrial-300 text-sm"
                          placeholder="email@ejemplo.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 uppercase font-sans font-bold">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-sans text-industrial-400 uppercase tracking-widest font-black">WhatsApp / Teléfono</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-industrial-50 border border-industrial-100 rounded-2xl px-6 py-4 text-industrial-900 focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-industrial-300 text-sm"
                        placeholder="+54 11 ..."
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 uppercase font-sans font-bold">{errors.phone.message}</span>}
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-sans text-industrial-400 uppercase tracking-widest font-black">Contanos sobre tu proyecto</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-industrial-50 border border-industrial-100 rounded-2xl px-6 py-5 text-industrial-900 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none placeholder:text-industrial-300 text-sm mt-4"
                        placeholder="Contanos brevemente qué tenés en mente..."
                      />
                      {errors.message && <span className="text-[10px] text-red-500 uppercase font-sans font-bold">{errors.message.message}</span>}
                    </div>

                    <MiradorButton
                      type="submit"
                      className="w-full py-8 !rounded-2xl"
                      icon={<Send size={16} />}
                      iconPosition="right"
                    >
                      {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                    </MiradorButton>
                  </form>
                </div>
              </motion.div>

              {/* Calendly / Scheduling Card - Dark Theme like About slider */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-industrial-900 rounded-[32px] p-12 md:p-16 flex flex-col items-center text-center group cursor-pointer shadow-2xl relative overflow-hidden"
                onClick={() => window.open(scheduling.calendly_url, '_blank')}
              >
                {/* Blueprint pattern inside dark card */}
                <div className="absolute inset-0 arch-grid opacity-[0.05] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <Calendar className="w-8 h-8 text-white group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display text-white uppercase tracking-tighter leading-none mb-6 font-bold">
                    {scheduling.title}
                  </h3>
                  
                  <p className="text-industrial-300 text-base max-w-sm mb-10 font-sans font-medium">
                    {scheduling.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-4 text-primary font-bold font-sans text-[11px] uppercase tracking-[0.4em] border-b border-primary/30 pb-2 group-hover:border-primary transition-all">
                    {scheduling.button_text} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

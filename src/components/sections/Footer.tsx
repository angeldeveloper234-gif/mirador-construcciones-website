import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { config } from "@/config";
import { 
    Instagram, 
    Linkedin, 
    Youtube, 
    Twitter, 
    Send,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-mirador-dark text-white pt-24 pb-12 overflow-hidden selection:bg-primary selection:text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Columna 1: Branding & Social */}
                    <div className="space-y-8">
                        <img 
                            src="/ej-construccion/mirador-logo-white.png" 
                            alt="Mirador Logo" 
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs">
                            Líderes en construcción y arquitectura premium. Transformamos visiones en realidades estructurales con la más alta calidad y precisión técnica.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" },
                                { icon: <Youtube size={18} />, href: "#" },
                                { icon: <Twitter size={18} />, href: "#" },
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna 2: Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-bold font-display">Navegación</h4>
                        <ul className="grid grid-cols-1 gap-4">
                            {config.navigation.map(link => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-white/60 hover:text-primary transition-colors font-sans text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contact */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-bold font-display">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 font-sans text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>{branding.phone}</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60 font-sans text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>{branding.email}</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/60 font-sans text-sm">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>{branding.location}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-lg font-bold font-display">Recibe Novedades</h4>
                        <p className="text-white/60 font-sans text-sm">Suscríbete para recibir noticias y actualizaciones de nuestros proyectos.</p>
                        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Tu email..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-primary transition-all font-sans text-sm pr-14"
                            />
                            <button 
                                type="submit"
                                className="absolute right-2 top-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm font-sans">
                        © {new Date().getFullYear()} Mirador Construcciones. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-sm font-sans text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


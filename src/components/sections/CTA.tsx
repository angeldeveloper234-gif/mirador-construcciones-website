import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTA() {
    return (
        <section className="bg-mirador-dark py-12 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display text-white leading-tight"
                    >
                        Hablemos de tu <span className="text-primary italic">próximo</span> proyecto
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/contact">
                            <Button 
                                size="lg"
                                className="bg-primary hover:bg-white hover:text-primary text-white px-10 py-8 text-lg font-bold rounded-full transition-all duration-300 flex items-center gap-3"
                            >
                                Contactar Ahora <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


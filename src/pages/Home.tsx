import { Hero, AboutUs, Stats, FeaturedWorks, Testimonials, Features, BeforeAfter, LeadMagnet, WhyChooseUs, NewsletterCTA } from "@/components/sections";

import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";
import { motion } from "motion/react";
import { MiradorButton } from "@/components/ui/MiradorButton";

export function Home() {
    const { branding, dynamicContent } = config;

    return (
        <main className="relative selection:bg-primary selection:text-white bg-white">
            <SEO 
                description={`${branding.name} — ${branding.slogan}. ${branding.description}`}
                keywords={`${branding.name}, arquitectura premium, diseño de interiores, proyectos 3d, buenos aires`}
            />
            
            {/* 1. HERO SECTION */}
            <Hero />
            
            {/* 1.1 STATS ROW */}
            <Stats />

            {/* 1.5 ABOUT US */}
            <AboutUs />


            {/* 2. WHAT WE BUILD (Features) */}
            <Features />

            {/* 3. WHY CHOOSE US */}
            <WhyChooseUs />

            {/* 4. LA EXPERIENCIA INMERSIVA (Steps + Slider Antes/Después) */}

            <BeforeAfter />

            {/* 5. PORTFOLIO DE AUTOR (Galería Curada) */}
            <FeaturedWorks />
            
            {/* 7. SIMULACIÓN DE DISEÑO (Calculadora) */}
            <LeadMagnet />

            {/* 9. PRUEBA SOCIAL (Testimonios + Press Logos) */}
            <Testimonials />

            {/* 10. NEWSLETTER CTA (Lead Magnet 2) */}
            <NewsletterCTA />
            
        </main>
    );
}


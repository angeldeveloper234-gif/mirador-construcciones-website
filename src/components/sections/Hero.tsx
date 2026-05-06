import React from 'react';
import { motion } from 'motion/react';
import { MiradorButton } from '@/components/ui/MiradorButton';
import { config } from '@/config';
import { ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  const { branding, dynamicContent } = config;
  const { section_details } = dynamicContent;
  const { Hero: heroData } = section_details;

  return (
    <section className="bg-white px-4 pb-12 pt-8 relative selection-primary overflow-x-hidden">

      {/* Framed Inner Container - Height and Radius following 8px rule */}
      <div className="relative min-h-[640px] md:min-h-[720px] lg:h-[85vh] rounded-[32px] md:rounded-[48px] overflow-hidden bg-zinc-900 group shadow-2xl">

        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.75 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src="/ej-construccion/hero-idea1.jpg"
              alt={branding.name}
              className="w-full h-full object-cover object-[center_35%]"
            />
          </motion.div>

          {/* Gradients - Layering for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:block hidden" />
        </div>

        {/* Content Container - Improved mobile spacing */}
        <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10 w-full h-full flex flex-col justify-center md:justify-end pb-12 md:pb-32 pt-20 md:pt-0">

          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-3xl">
              {/* Top Pill Tag */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="inline-flex items-center gap-2 md:gap-4 px-3 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 mb-6 md:mb-8 cursor-pointer hover:bg-white/20 active:scale-95 transition-all group/pill max-w-full"
              >
                <span className="text-white/90 font-sans text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold truncate">
                  {heroData.microtext}
                </span>
                <div className="flex items-center gap-1.5 border-l border-white/20 pl-2 md:pl-4 shrink-0">
                  <span className="text-primary font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em]">Explorar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>

              {/* Main Heading - Adjusted for mobile */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-white mb-6 md:mb-10 break-words"
              >
                <span className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] block font-stardom font-bold uppercase tracking-[-0.01em] leading-[1.1]">
                  {heroData.title.split(',')[0]}
                </span>
                <span className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[56px] block font-stardom font-light text-white/80 mt-2 leading-[1.2]">
                  {heroData.title.split(',')[1]}
                </span>
              </motion.h1>

              {/* Subtitle - Better measure and spacing */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-white/70 font-sans font-medium text-sub-clamped max-w-[65ch] mb-10 md:mb-12"
              >
                {heroData.subtitle}
              </motion.p>

              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <MiradorButton 
                  href="/contact"
                  variant="white"
                  className="pl-8 w-full sm:w-auto"
                >
                  {heroData.cta_primary}
                </MiradorButton>
              </motion.div>
            </div>



          </div>
        </div>
      </div>

      {/* OVERLAPPING SEAL - Visual Hierarchy (Rule 2) */}
      <div className="absolute bottom-16 right-16 md:right-32 z-20 hidden sm:block">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 1.3 }}
            className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-black rounded-full shadow-2xl border border-white/10"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80">
                <path id="sealPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[8.5px] uppercase tracking-[0.35em] font-bold">
                  <textPath xlinkHref="#sealPath">ESTRATEGIA • CONSTRUCCIÓN • INGENIERÍA • </textPath>
                </text>
              </svg>
            </motion.div>
            
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-black relative z-10 shadow-xl hover:scale-110 active:scale-90 transition-transform cursor-pointer">
                <ArrowUpRight className="w-7 h-7 rotate-90" />
            </div>
          </motion.div>
      </div>
    </section>
  );
};

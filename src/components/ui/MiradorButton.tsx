import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

interface MiradorButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'dark' | 'white';
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode;
    href?: string;
    iconPosition?: 'left' | 'right';
}

export const MiradorButton = ({ 
    children, 
    onClick, 
    className, 
    variant = 'primary',
    type = 'button',
    icon,
    href,
    iconPosition = 'left'
}: MiradorButtonProps) => {
    
    const variants = {
        primary: "bg-primary text-white hover:bg-industrial-900",
        dark: "bg-industrial-900 text-white hover:bg-black",
        white: "bg-white text-industrial-900 hover:bg-zinc-100 shadow-lg"
    };

    const iconColors = {
        primary: "text-white bg-industrial-900 group-hover:bg-white group-hover:text-primary",
        dark: "text-industrial-900 bg-white group-hover:text-black",
        white: "text-white bg-industrial-900 group-hover:bg-primary group-hover:text-white"
    };

    const iconElement = (
        <div className={cn(
            "relative w-7 h-7 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500",
            iconColors[variant]
        )}>
            <div className="absolute transition-transform duration-500 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]">
                {icon || (
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12}>
                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                    </svg>
                )}
            </div>
            <div className="absolute translate-x-[-150%] translate-y-[150%] transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                {icon || (
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" width={12}>
                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                    </svg>
                )}
            </div>
        </div>
    );

    const content = (
        <div className={cn(
            "flex items-center gap-4",
            iconPosition === 'right' ? "flex-row-reverse" : "flex-row"
        )}>
            {iconElement}
            <span className="relative z-10">{children}</span>
        </div>
    );

    const commonClasses = cn(
        "group relative inline-flex items-center rounded-full px-6 py-2.5 font-sans font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden shadow-xl",
        variants[variant],
        className
    );

    if (href) {
        return (
            <MotionLink 
                to={href} 
                className={commonClasses} 
                onClick={onClick}
                whileTap={{ scale: 0.97 }}
            >
                {content}
            </MotionLink>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            whileTap={{ scale: 0.97 }}
            className={commonClasses}
        >
            {content}
        </motion.button>
    );
};

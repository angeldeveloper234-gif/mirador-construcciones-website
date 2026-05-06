import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Estado Original",
  afterLabel = "Propuesta 3D"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let x = 0;

    if ('touches' in event) {
      x = event.touches[0].clientX - rect.left;
    } else {
      x = (event as MouseEvent).clientX - rect.left;
    }

    const position = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden cursor-col-resize group rounded-sm border border-border bg-black"
    >
      {/* After Image (Primary) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover select-none"
      />
      
      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white/80 border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Label After */}
      <div className="absolute top-4 right-4 bg-primary/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-primary/20">
        {afterLabel}
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-white/50 backdrop-blur-sm z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white/80" />
            <div className="w-1 h-1 rounded-full bg-white/80" />
            <div className="w-1 h-1 rounded-full bg-white/80" />
          </div>
        </div>
      </div>

      {/* Transparent overlay for mouse events */}
      <div 
        className="absolute inset-0 z-20"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          Desliza para explorar la visión
        </span>
      </div>
    </div>
  );
};

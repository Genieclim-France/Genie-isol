"use client";

import { BlurFade } from "@/components/blur-fade";
import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export type FocusButtonProps = {
  id: string;
  label: string;
  positionClasses: string;
  expandedWidth: string;
  hoveredButton: string | null;
  setHoveredButton: (value: string | null) => void;
  delay: number;
};

// Hook personnalisé pour détecter si l'écran est inférieur à la breakpoint lg (1024px)
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Vérifier dès le montage
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function FocusButton({
  id,
  label,
  positionClasses,
  expandedWidth,
  hoveredButton,
  setHoveredButton,
  delay,
}: FocusButtonProps) {
  const isMobile = useIsMobile();
  const isHovered = hoveredButton === id;

  // On utilise hover uniquement pour les écrans non mobiles
  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoveredButton(id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredButton(null);
    }
  };

  // Pour les écrans mobiles, le clic permet d'alterner l'état
  const handleClick = () => {
    if (isMobile) {
      setHoveredButton(isHovered ? null : id);
    }
  };

  return (
    <div
      className={positionClasses}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      onClick={isMobile ? handleClick : undefined}
    >
      <BlurFade delay={delay} inView>
        <button className="bg-yellow-400 rounded-full flex items-center min-w-12 min-h-12 justify-center text-black hover:scale-110 transition-all duration-300 overflow-hidden shadow-xl">
          <AiOutlinePlusCircle
            className={`text-3xl transition-all duration-300 transform ${
              isHovered ? "translate-x-2" : "translate-x-0"
            }`}
          />
          <div
            className={`overflow-hidden transition-all font-bold duration-300 ${
              isHovered ? `${expandedWidth} mx-2 opacity-100` : "w-0 opacity-0"
            }`}
          >
            <span className="text-sm whitespace-nowrap">{label}</span>
          </div>
        </button>
      </BlurFade>
    </div>
  );
}

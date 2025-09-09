"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface AccordionSection {
  title: string;
  content: (string | { text: string; isSubtitle: boolean })[];
  image?: StaticImageData;
}

interface AccordionProps {
  sections: AccordionSection[];
}

function Accordion({ sections }: AccordionProps) {
  const [openSection, setOpenSection] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const accordionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback((index: number) => {
    // Arrêter l'animation automatique
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpenSection(index);
    setIsAutoPlaying(false);

    // Redémarrer l'animation automatique après 5 secondes d'inactivité
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedAnimation) {
          setIsVisible(true);
          setHasStartedAnimation(true);
          setIsAutoPlaying(true);
          startAutoAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        observer.unobserve(accordionRef.current);
      }
    };
  }, [hasStartedAnimation]);

  const startAutoAnimation = useCallback(() => {
    const animateNext = () => {
      setOpenSection((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sections.length;
        return nextIndex;
      });

      // Programmer le prochain changement seulement si l'animation est active
      timeoutRef.current = setTimeout(() => {
        animateNext();
      }, 2000);
    };

    // Nettoyer le timeout précédent
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Démarrer l'animation après 2 secondes
    timeoutRef.current = setTimeout(() => {
      animateNext();
    }, 2000);
  }, [sections.length]);

  // Gérer l'animation selon l'état isAutoPlaying
  useEffect(() => {
    if (!isAutoPlaying && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    } else if (isAutoPlaying) {
      startAutoAnimation();
    }
  }, [isAutoPlaying, startAutoAnimation]);

  // Cleanup des timers
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={accordionRef}
      className="mx-8 mb-8 lg:mx-40 lg:mb-12 2xl:mx-96 smooth-scroll"
    >
      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Section gauche - Titres */}
          <div className="lg:w-1/3 space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`relative transition-all duration-500 ease-in-out ${
                  isVisible
                    ? "animate-slideInRight"
                    : "opacity-0 translate-x-[-20px]"
                }`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                {/* Barre orange à gauche qui couvre tout le container */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ease-in-out ${
                    openSection === index
                      ? "bg-primary shadow-md"
                      : "bg-gray-300"
                  }`}
                />

                <div
                  className={`relative cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                    openSection === index
                      ? "text-primary animate-pulse-slow"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <h3
                    className={`pl-6 py-3 font-bold text-lg uppercase transition-all duration-300 ${
                      openSection === index
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {section.title}
                  </h3>
                </div>

                {/* Sous-titre qui apparaît quand la section est ouverte */}
                {openSection === index && (
                  <div className="pl-6 mt-2 mb-4 text-sm text-gray-500 animate-fadeIn">
                    {section.title === "Isolation des combles" && (
                      <p>
                        Aménagés, aménageables ou perdus, nous isolons tous vos
                        espaces en contact avec des pièces chauffées.
                      </p>
                    )}
                    {section.title === "Isolation des planchers bas" && (
                      <p>
                        Limitez les pertes de chaleur par le sol et améliorez
                        votre confort thermique.
                      </p>
                    )}
                    {section.title ===
                      "ITE (isolation thermique extérieure)" && (
                      <p>
                        Enveloppez votre habitation d'une couche isolante pour
                        réduire les pertes de chaleur.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Section droite - Contenu */}
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <div className="bg-gray-50 border-2 border-primary rounded-2xl p-6 lg:p-8 min-h-[400px] shadow-lg">
              <div
                key={openSection}
                className="flex flex-col lg:flex-row lg:gap-6 animate-fadeInUp opacity-0"
                style={{
                  animation: "fadeInUp 0.5s ease-out 0.1s forwards",
                }}
              >
                {/* Section texte */}
                <div
                  className="flex-1 opacity-0"
                  style={{ animation: "fadeInUp 0.4s ease-out 0.2s forwards" }}
                >
                  <h4 className="text-primary font-bold text-lg uppercase mb-4">
                    EN RÉSUMÉ
                  </h4>
                  <div className="space-y-4">
                    {sections[openSection].content.map((item, index) => (
                      <p
                        key={index}
                        className={`text-gray-700 leading-relaxed ${
                          typeof item === "string"
                            ? ""
                            : item.isSubtitle
                            ? "font-bold text-md my-4"
                            : ""
                        }`}
                      >
                        {typeof item === "string" ? item : item.text}
                      </p>
                    ))}
                  </div>
                  <div className="pt-10">
                    <Image
                      src={sections[openSection].image}
                      alt={sections[openSection].title}
                      className="w-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;

"use client";

import { useEffect, useRef, useState } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  inView?: boolean;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.4,
  inView = false,
}: BlurFadeProps) {
  const [isVisible, setIsVisible] = useState(!inView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) {
      const timer = setTimeout(() => setIsVisible(true), delay * 1000);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, inView]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: `blur(${isVisible ? 0 : 6}px)`,
        transform: `translateY(${isVisible ? 0 : 6}px)`,
        transition: `all ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
}

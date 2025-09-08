"use client";

import { useState } from "react";
import Image from "next/image";
import panneausolaire from "../../../public/panneausolaire.png";
import FocusButton from "./FocusButton";

export default function Focus() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="relative flex justify-center items-center mt-10 w-full">
      <Image
        src={panneausolaire}
        alt="Panneau solaire"
        className="w-[90%] xl:w-[80%] 2xl:w-[70%] 3xl:w-[55%] mr-auto xl:mr-0"
      />

      <FocusButton
        id="technologie"
        label="Technologie"
        positionClasses="absolute top-[25%] left-[30%] xl:left-[40%]"
        expandedWidth="w-24"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
        delay={0.4}
      />

      <FocusButton
        id="design"
        label="Design"
        positionClasses="absolute top-[45%] right-[10%] xl:right-[20%]"
        expandedWidth="w-16"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
        delay={0.8}
      />

      <FocusButton
        id="resistance"
        label="Résistance"
        positionClasses="absolute bottom-[20%] left-[15%] xl:left-[25%]"
        expandedWidth="w-20"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
        delay={1.2}
      />
    </div>
  );
}

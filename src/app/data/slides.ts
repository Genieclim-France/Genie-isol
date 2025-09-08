import { StaticImageData } from "next/image";
import panneau from "@/../public/panneau.webp";
import panneau2 from "@/../public/panneau-2.webp";

interface Slide {
  id: number;
  title: string;
  content: string[];
  image: StaticImageData;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Panneau photovoltaïque",
    content: [
      "Il est possible de stocker l'électricité que vous produisez grâce à vos panneaux solaires pour l'utiliser plus tard. Il est possible, en tant que particulier, de stocker l'électricité chez vous grâce à une batterie. Ainsi, vous pouvez stocker votre électricité lorsque cette dernière est la moins chère.",
    ],
    image: panneau,
  },
  {
    id: 2,
    title: "Solution de stockage modulaire et évolutive",
    content: [
      "Le système de stockage d'énergie Q.HOME⁺ ESS AC-G2 de SAMSUNG / Q CELLS est la solution idéale pour les foyers pour économiser l'électricité à long terme et offre une fiabilité opérationnelle à long terme et une sécurité de rendement.",
    ],
    image: panneau2,
  },
];

import Article from "./components/home/Article";
import BannerMid from "./components/home/BannerMid";
import Hero from "./components/home/Hero";
import FormDevis from "./components/home/FormDevis";
import Products from "./components/home/Products";
import BannerDown from "./components/home/BannerDown";
import Slider from "./components/home/Slider";
import Image from "next/image";
import imgGcf from "../../public/isolationimage.webp";
import { TypingAnimation } from "./components/animation/typing-animation";
import { BlurFade } from "./components/animation/blur-fade";

export default function Home() {
  return (
    <>
      <Hero />
      <Article />
      <BannerMid />
      <Products />
      <BannerDown />
      <Slider />
      <FormDevis />
      <article className="flex flex-col lg:items-center lg:justify-center lg:px-40 xl:gap-14 lg:flex-row p-8 xl:px-40 lg:p-24 2xl:px-72">
        <div className="lg:w-1/2 2xl:text-xl">
          <h2 className="font-bold uppercase font-emOne mb-1">
            <TypingAnimation
              className="text-2xl lg:text-3xl 2xl:text-4xl"
              duration={100}
              startOnView={true}
            >
              Chez GENIE ISOL France,
            </TypingAnimation>
          </h2>
          <BlurFade delay={1.5} duration={0.7} inView>
            <h3 className="text-sm font-bold italic uppercase pb-4 2xl:text-xl after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary font-emOne">
              nous faisons bien plus que réaliser vos travaux d’isolation.
            </h3>
          </BlurFade>
          <BlurFade delay={1.7} duration={0.7} inView>
            <p className="pb-4 font-kollektif lg:pt-6">
              Nous vous apportons un accompagnement personnalisé, avec une
              équipe dédiée au suivi de chantier pour garantir la qualité et la
              sérénité à chaque étape. Grâce à notre CRM de suivi, vous disposez
              d’une visibilité complète et en temps réel sur l’avancement de vos
              projets.
            </p>
            <p className="pb-4 font-kollektif">
              Entreprise qualifiée, nous respectons scrupuleusement l’ensemble
              des critères techniques et réglementaires permettant l’accès aux
              aides de l’État. Vous bénéficiez ainsi d’un partenaire fiable,
              structuré et professionnel, qui vous assure des chantiers
              maîtrisés, conformes et durables.
            </p>
            <p className="pb-4 font-kollektif">
              Entreprise qualifiée, nous respectons scrupuleusement l’ensemble
              des critères techniques et réglementaires permettant l’accès aux
              aides de l’État. Vous bénéficiez ainsi d’un partenaire fiable,
              structuré et professionnel, qui vous assure des chantiers
              maîtrisés, conformes et durables.
            </p>
            <p className="pb-4 font-kollektif">
              GENIE ISOL France, c’est la garantie d’une sous-traitance
              d’isolation performante, transparente et tournée vers vos enjeux.
            </p>
          </BlurFade>
        </div>
        <div className="lg:w-1/3 lg:pl-16 relative">
          <div className="relative z-10">
            <Image
              src={imgGcf}
              alt="Génieclim france"
              className="rounded-3xl border-2 border-primary shadow-xl lg:h-[28rem] lg:w-full object-cover"
            />
          </div>
        </div>
      </article>
    </>
  );
}

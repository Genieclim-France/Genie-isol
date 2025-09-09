import Image from "next/image";
import imgGcf from "../../../../public/img-gcf.png";
import { TypingAnimation } from "../animation/typing-animation";
import { BlurFade } from "../animation/blur-fade";

function Article() {
  return (
    <article className="flex flex-col lg:items-center lg:justify-center lg:px-40 xl:gap-14 lg:flex-row p-8 xl:px-40 lg:p-24 2xl:px-72">
      <div className="lg:w-1/2 2xl:text-xl">
        <h2 className="font-bold uppercase font-emOne mb-1">
          <TypingAnimation
            className="text-2xl lg:text-3xl 2xl:text-4xl"
            duration={100}
            startOnView={true}
          >
            Génie Isol france
          </TypingAnimation>
        </h2>
        <BlurFade delay={1.5} duration={0.7} inView>
          <h3 className="text-sm font-bold italic uppercase pb-4 2xl:text-xl after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary font-emOne">
            La réference de l'isolation
          </h3>
        </BlurFade>
        <BlurFade delay={1.7} duration={0.7} inView>
          <p className="pb-4 font-kollektif lg:pt-6">
            Nous sommes une entreprise spécialisée dans l’isolation thermique
            des maisons ou appartements, et nous intervenons partout en France
            en tant que partenaire sous-traitant auprès des professionnels du
            bâtiment. Notre expertise couvre l’ensemble des solutions
            d’isolation :
          </p>
          <ul className="list-disc list-inside font-kollektif pb-4 pl-10">
            <li>
              Isolation des combles : soufflage, déroulé, isolation des rampants
            </li>
            <li>Isolation des planchers bas</li>
            <li>Isolation thermique par l'extérieur (ITE)</li>
          </ul>
          <p className="pb-4 font-kollektif">
            Notre objectif est clair : devenir un partenaire de confiance,
            capable de vous accompagner durablement dans vos projets et de
            contribuer à la réussite de vos réalisations.
          </p>
        </BlurFade>
      </div>
      <div className="lg:w-fit lg:pl-16">
        <Image src={imgGcf} alt="Génieclim france" />
      </div>
    </article>
  );
}

export default Article;
